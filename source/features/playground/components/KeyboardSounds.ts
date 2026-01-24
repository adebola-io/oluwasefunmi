let audioCtx: AudioContext | null = null;

const initAudio = () => {
    if (!audioCtx && typeof window !== "undefined") {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtx = new AudioContextClass();
    }
    return audioCtx;
};

export const playClick = () => {
    const ctx = initAudio();
    if (!ctx) return;

    if (ctx.state === "suspended") {
        ctx.resume();
    }

    const now = ctx.currentTime;

    // Create a shared noise buffer for the components
    const bufferSize = ctx.sampleRate * 0.05;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
    }

    // 1. The "Tick" (High-frequency switch snap)
    const tick = ctx.createBufferSource();
    tick.buffer = buffer;
    
    const tickFilter = ctx.createBiquadFilter();
    tickFilter.type = "highpass";
    tickFilter.frequency.setValueAtTime(5000 + Math.random() * 2000, now);

    const tickGain = ctx.createGain();
    tickGain.gain.setValueAtTime(0.06, now);
    tickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.008);

    tick.connect(tickFilter);
    tickFilter.connect(tickGain);
    tickGain.connect(ctx.destination);

    // 2. The "Thump" (Lower-frequency keycap bottoming out)
    const thump = ctx.createBufferSource();
    thump.buffer = buffer;

    const thumpFilter = ctx.createBiquadFilter();
    thumpFilter.type = "bandpass";
    thumpFilter.frequency.setValueAtTime(400 + Math.random() * 200, now);
    thumpFilter.Q.value = 1.5;

    const thumpGain = ctx.createGain();
    thumpGain.gain.setValueAtTime(0.04, now);
    thumpGain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

    thump.connect(thumpFilter);
    thumpFilter.connect(thumpGain);
    thumpGain.connect(ctx.destination);

    tick.start(now);
    thump.start(now);
};
