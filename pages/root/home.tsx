import { useRouter, type RouteComponent } from 'retend/router';
import type { PageMeta } from 'retend-server/client';
import { getGlobalContext, matchContext, Modes } from 'retend/context';
import { Plane } from '@/components/plane';
import { Emphasis, LargeText } from '@/components/typography';
import { LinkButton } from '@/components/links-and-buttons';
import { ShiftingLayout } from '@/components/shifting-layout';
import { timeline } from '@/library';

const { window } = getGlobalContext();
// Preload routes.
if (matchContext(window, Modes.Interactive)) {
  import('./works/index.tsx');
  import('./contact.tsx');
  import('./random-notes/index.tsx');
  import('./playground/index.tsx');
}

const Home: RouteComponent<PageMeta> = () => {
  const { Link } = useRouter();

  return (
    <Plane
      animated
      class={[
        'h-[calc(100dvh-var(--spacing)*9)] px-6 py-4',
        'grid grid-cols-2 gap-6 items-center home-backdrop',
        'before:block before:[grid-area:1/1/1/3] before:scale-[1.06] before:border-solid before:border-[2.76px] before:self-center before:justify-self-center before:w-full before:h-full before:rounded-xl',
      ]}
    >
      <ShiftingLayout
        container:class="h-full [grid-area:1/1] z-1"
        animated
        animationDelay={timeline[1]}
      />
      <div class="grid grid-cols-[auto_auto_auto] place-content-center gap-1 [grid-area:1/2] z-1">
        <div class="overflow-hidden col-span-3">
          <LargeText
            style={{ animationDelay: timeline[2] }}
            class="animate-fade-in-from-bottom"
            underline
          >
            oluwasefunmi.
            <br />
            web engineer.
          </LargeText>
        </div>
        <p
          style={{ animationDelay: timeline[2] }}
          class="col-span-3 animate-fade-in-from-bottom"
        >
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
        <LinkButton animated animationDelay={timeline[1]} href="/works">
          see works
        </LinkButton>
        <LinkButton animated animationDelay={timeline[1]} href="/contact">
          contact me
        </LinkButton>
      </div>
    </Plane>
  );
};

Home.metadata = {
  title: 'Oluwasefunmi, Web Engineer',
  description: 'This is the home page',
};

export default Home;
