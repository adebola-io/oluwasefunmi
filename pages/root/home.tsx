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
  const callback = () => {
    import('./works/index.tsx');
    import('./contact.tsx');
    import('./random-notes/index.tsx');
    import('./playground/index.tsx');
  };
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(callback);
  } else callback();
}

const Home: RouteComponent<PageMeta> = () => {
  const { Link } = useRouter();

  return (
    <Plane
      animated
      topLevel
      container:class="h-full"
      class={[
        'px-6 py-4',
        'grid grid-cols-2 gap-6 items-center home-backdrop',
        'before:block before:[grid-area:1/1/1/3] before:scale-[1.06] before:border-solid before:border-[2.76px] before:self-center before:justify-self-center before:w-full before:h-full before:rounded-xl',
        'max-md:before:hidden max-md:h-fit max-md:px-3 max-md:text-center max-md:grid-cols-1 max-md:gap-0',
      ]}
    >
      <ShiftingLayout
        container:class="h-full [grid-area:1/1] z-1 max-md:hidden"
        animated
        animationDelay={timeline[1]}
      />
      <div class="grid grid-cols-[auto_auto_auto] place-content-center gap-1 [grid-area:1/2] z-1">
        <div
          class={[
            'overflow-hidden col-span-3',
            'max-md:grid max-md:place-items-center',
          ]}
        >
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
        <LinkButton
          class="max-md:text-nowrap max-md:col-span-3 max-md:mt-2"
          animated
          animationDelay={timeline[1]}
          href="/works"
        >
          see works
        </LinkButton>
        <LinkButton
          class="max-md:text-nowrap max-md:col-span-3"
          animated
          animationDelay={timeline[1]}
          href="/contact"
        >
          contact me
        </LinkButton>
      </div>
    </Plane>
  );
};

Home.metadata = {
  title: 'Oluwasefunmi, Web Engineer',
  description:
    'I am a full-stack web developer from Lagos, Nigeria focused on creating interactive digital experiences and tackling complex design challenges.',
};

export default Home;
