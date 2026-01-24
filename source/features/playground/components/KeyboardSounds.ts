let audioCtx: AudioContext | null = null;

const initAudio = () => {
    if (!audioCtx && typeof window !== "undefined") {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtx = new AudioContextClass();
    }
    return audioCtx;
};

export type SoundProfile = "switch" | "typewriter" | "bubble";

let currentProfile: SoundProfile = "switch";

export const setSoundProfile = (profile: SoundProfile) => {
    currentProfile = profile;
};

const createNoiseBuffer = (ctx: AudioContext) => {
    const bufferSize = ctx.sampleRate * 0.05;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
    }
    return buffer;
};

const playSwitchSound = (ctx: AudioContext, now: number, buffer: AudioBuffer) => {
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

const playTypewriterSound = (ctx: AudioContext, now: number, buffer: AudioBuffer) => {
    // Mechanical click - Low thud
    const thud = ctx.createBufferSource();
    thud.buffer = buffer;
    
    const thudFilter = ctx.createBiquadFilter();
    thudFilter.type = "lowpass";
    thudFilter.frequency.setValueAtTime(300, now);

    const thudGain = ctx.createGain();
    thudGain.gain.setValueAtTime(0.2, now);
    thudGain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

    thud.connect(thudFilter);
    thudFilter.connect(thudGain);
    thudGain.connect(ctx.destination);
    
    thud.start(now);

    // High snap (the striker hitting)
    const snap = ctx.createBufferSource();
    snap.buffer = buffer;
    
    const snapFilter = ctx.createBiquadFilter();
    snapFilter.type = "highpass";
    snapFilter.frequency.setValueAtTime(2000, now);
    
    const snapGain = ctx.createGain();
    snapGain.gain.setValueAtTime(0.1, now);
    snapGain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
    
    snap.connect(snapFilter);
    snapFilter.connect(snapGain);
    snapGain.connect(ctx.destination);
    
    snap.start(now);

    // Subtle metallic resonance (no pitch bend)
    const metal = ctx.createOscillator();
    metal.type = "square";
    metal.frequency.setValueAtTime(2200, now); // Fixed frequency
    
    const metalGain = ctx.createGain();
    metalGain.gain.setValueAtTime(0.01, now);
    metalGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08); // Very short decay
    
    metal.connect(metalGain);
    metalGain.connect(ctx.destination);
    
    metal.start(now);
    metal.stop(now + 0.1);
};

const playBubbleSound = (ctx: AudioContext, now: number) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.connect(gain);
    gain.connect(ctx.destination);

    const freq = 300 + Math.random() * 200;
    osc.frequency.setValueAtTime(freq, now);
    osc.frequency.exponentialRampToValueAtTime(freq * 2, now + 0.1);
    
    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
    
    osc.start(now);
    osc.stop(now + 0.1);
};

export const playClick = () => {
    const ctx = initAudio();
    if (!ctx) return;

    if (ctx.state === "suspended") {
        ctx.resume();
    }

    const now = ctx.currentTime;
    const buffer = createNoiseBuffer(ctx);

    switch (currentProfile) {
        case "switch":
            playSwitchSound(ctx, now, buffer);
            break;
        case "typewriter":
            playTypewriterSound(ctx, now, buffer);
            break;
        case "bubble":
            playBubbleSound(ctx, now);
            break;
    }
};
