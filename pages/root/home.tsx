import type { RouteComponent } from 'retend/router';
import type { PageMeta } from 'retend-server/client';
import { LinkButton } from '@/components/links-and-buttons';
import { Plane } from '@/components/plane';
import { ShiftingLayout } from '@/components/shifting-layout';
import { Emphasis, LargeText } from '@/components/typography';
import { timeline } from '@/library';
import { getActiveRenderer } from 'retend';
import { DOMRenderer } from 'retend-web';

const Home: RouteComponent<PageMeta> = () => {
  const renderer = getActiveRenderer();
  // Preload routes.
  if (renderer instanceof DOMRenderer) {
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

  return (
    <Plane
      animated
      topLevel
      container:class="h-full"
      class={[
        'px-6 py-4',
        'grid grid-cols-2 gap-6 items-center home-backdrop',
        'before:block before:[grid-area:1/1/1/3] before:scale-[1.06] before:border-solid before:border-[2.76px] before:self-center before:justify-self-center before:w-full before:h-full before:rounded-xl',
        'max-md:before:hidden max-md:h-fit',
        'max-sm:px-2',
        'max-xl:grid-cols-1 max-xl:gap-0 max-xl:px-3 max-xl:before:scale-90 max-xl:text-center',
      ]}
    >
      <ShiftingLayout
        container:class="h-full [grid-area:1/1] z-1 max-xl:hidden"
        animated
        animationDelay={timeline[1]}
      />
      <div
        class={[
          'grid grid-cols-[auto_auto_auto] place-content-center gap-1 [grid-area:1/2] z-1',
          'max-xl:flex max-xl:flex-wrap max-xl:gap-2 max-md:gap-1',
        ]}
      >
        <div
          class={[
            'overflow-hidden col-span-3',
            'max-md:grid max-md:place-items-center',
          ]}
        >
          <LargeText
            style={{ animationDelay: timeline[2] }}
            class="animate-fade-in-from-bottom w-full"
            underline
          >
            oluwasefunmi.
            <br />
            web engineer.
          </LargeText>
        </div>
        <p
          style={{ animationDelay: timeline[2] }}
          class="col-span-3 animate-fade-in-from-bottom w-full"
        >
          <span class="inline-block max-xl:max-w-[70dvw] max-md:max-w-[unset]">
            I am a <Emphasis>full-stack</Emphasis> web developer from{' '}
            <Emphasis>Lagos, Nigeria</Emphasis> focused on creating interactive
            digital experiences and tackling complex design challenges.
            <br />
            <br />
            Some of my works include{' '}
            <a
              data-inline
              href="https://www.vizitly.io"
              rel="noreferrer"
              target="__blank"
            >
              Vizitly
            </a>
            ,{' '}
            <a
              data-inline
              href="https://github.com/adebola-io/whirlwind"
              rel="noreferrer"
              target="__blank"
            >
              Whirlwind
            </a>
            ,{' '}
            <a
              data-inline
              href="https://enjoy-your-day.pages.dev"
              rel="noreferrer"
              target="__blank"
            >
              Enjoy Your Day
            </a>{' '}
            and{' '}
            <a
              data-inline
              href="https://www.npmjs.com/package/retend"
              rel="noreferrer"
              target="__blank"
            >
              Retend
            </a>
            .
          </span>
        </p>
        <LinkButton
          class="max-md:text-nowrap max-md:col-span-3 max-md:w-full"
          animated
          animationDelay={timeline[1]}
          href="/works"
        >
          see works
        </LinkButton>
        <LinkButton
          class="max-md:text-nowrap max-md:col-span-3 max-md:w-full"
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

const ogImage =
  'https://github.com/user-attachments/assets/b133948f-af74-47d3-b785-d28a0cce1b1e';
Home.metadata = {
  title: 'Oluwasefunmi, Web Engineer',
  ogTitle: 'Oluwasefunmi, Web Engineer',
  twitterTitle: 'Oluwasefunmi, Web Engineer',
  ogImage,
  description:
    'I am a full-stack web developer from Lagos, Nigeria focused on creating interactive digital experiences and tackling complex design challenges.',
  ogDescription:
    'I am a full-stack web developer from Lagos, Nigeria focused on creating interactive digital experiences and tackling complex design challenges.',
  twitterDescription:
    'I am a full-stack web developer from Lagos, Nigeria focused on creating interactive digital experiences and tackling complex design challenges.',
  twitterImage: ogImage,
};

export default Home;
