interface MetadataItemProps {
  label: string;
  value: string;
  delay?: string;
}

export const MetadataItem = (props: MetadataItemProps) => {
  const { label, value, delay } = props;
  return (
    <div
      class="space-y-1.5 animate-fade-in [animation-fill-mode:backwards]"
      style={{ animationDelay: delay ?? "0ms" }}
    >
      <h3 class="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold">
        {label}
      </h3>
      <p class="text-[13px] text-[#e0ebfd] font-medium leading-tight">
        {value}
      </p>
    </div>
  );
};

interface SectionHeadingProps {
  title: string;
  delay?: string;
}

export const SectionHeading = (props: SectionHeadingProps) => {
  const { title, delay } = props;
  return (
    <h2
      class="text-[11px] uppercase tracking-[0.25em] text-white/50 font-bold border-b border-white/5 pb-4 mb-6 animate-fade-in [animation-fill-mode:backwards]"
      style={{ animationDelay: delay ?? "0ms" }}
    >
      {title}
    </h2>
  );
};
