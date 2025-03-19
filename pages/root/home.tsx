import { useRouter, type RouteComponent } from 'retend/router';
import type { PageMeta } from 'retend-server/client';
import { Plane } from '@/components/plane';
import { Emphasis, LargeText } from '@/components/typography';
import { LinkButton } from '@/components/links-and-buttons';
import { ShiftingLayout } from '@/components/shifting-layout';

const Home: RouteComponent<PageMeta> = () => {
  const { Link } = useRouter();
  return (
    <Plane
      container:class="animate-fade-in [animation-duration:calc(var(--duration)*2.5)]"
      class={[
        'h-[calc(100dvh-var(--spacing)*9)] px-6 py-4',
        'grid grid-cols-2 gap-6 items-center',
        'bg-no-repeat bg-cover home-backdrop',
        'before:block before:[grid-area:1/1/1/3] before:scale-[1.06] before:border-solid before:border-[2.76px] before:self-center before:justify-self-center before:w-full before:h-full before:rounded-xl',
      ]}
    >
      <ShiftingLayout class="h-full [grid-area:1/1] z-1" />
      <div class="grid grid-cols-[auto_auto_auto] place-content-center gap-1 [grid-area:1/2] z-1">
        <LargeText class="col-span-3" underline>
          oluwasefunmi.
          <br />
          web engineer.
        </LargeText>
        <p class="col-span-3">
          I am a <Emphasis>full-stack</Emphasis> web developer from{' '}
          <Emphasis>Lagos, Nigeria</Emphasis> focused on creating interactive
          digital experiences and tackling complex design challenges.
          <br />
          <br />
          Some of my works include{' '}
          <Link data-inline href="/works/vizitly">
            Vizitly
          </Link>
          ,{' '}
          <Link data-inline href="/works/whirlwind">
            Whirlwind
          </Link>
          ,{' '}
          <Link data-inline href="/works/enjoy-your-day">
            Enjoy Your Day
          </Link>{' '}
          and{' '}
          <Link data-inline href="/works/retend">
            Retend
          </Link>
          .
        </p>
        <LinkButton href="/random-notes">see works</LinkButton>
        <LinkButton href="/contact">contact me</LinkButton>
      </div>
    </Plane>
  );
};

Home.metadata = {
  title: 'Oluwasefunmi, Web Engineer',
  description: 'This is the home page',
};

export default Home;
