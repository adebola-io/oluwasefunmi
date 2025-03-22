import type { IconProps } from '@/components/icons';
import { GitHubIcon } from '@/components/icons/github';
import { ResumeIcon } from '@/components/icons/resume';
import { TwitterIcon } from '@/components/icons/twitter';
import { HugeText } from '@/components/typography';
import type { JSX } from 'retend/jsx-runtime';

export default function Start() {
  return (
    <div class="min-h-[100dvh] grid grid-center flex-col text-center background">
      <HugeText class="animate-expand-in">425</HugeText>
      <div class="grid grid-center grid-rows-2 gap-2">
        <p class="animate-expand-in [animation-delay:calc(var(--duration)*0.65)]">
          this site is under construction.
          <br />
          <i>check back later :)</i>
        </p>
        <ul
          class={[
            'grid grid-cols-3 gap-[25px] w-7',
            'animate-expand-in [animation-delay:calc(var(--duration)*1.15)]',
          ]}
        >
          <Link Icon={TwitterIcon} url="https://twitter.com/adebola_io" />
          <Link Icon={GitHubIcon} url="https://github.com/adebola-io" />
          <Link
            Icon={ResumeIcon}
            url="./oluwasefunmi-akomolafe.pdf"
            download="oluwasefunmi-akomolafe.pdf"
          />
        </ul>
      </div>
    </div>
  );
}

interface LinkProps {
  Icon: (props: IconProps) => JSX.Template;
  url: string;
  download?: string;
}
export function Link(props: LinkProps) {
  return (
    <li>
      <a
        download={props.download}
        rel="noreferrer"
        target="__blank"
        class={[
          'w-full h-full grid grid-center',
          'transition-[color,scale] duration-(--duration)',
          'hover:text-[#353535] hover:scale-110',
        ]}
        href={props.url}
      >
        <props.Icon class="w-[30px] h-[30px] [justify-self:center] [align-self:center]" />
      </a>
    </li>
  );
}
