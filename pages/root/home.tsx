import { type RouteComponent } from 'retend/router';
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
            href="https://dev.enjoyyourday.live"
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
  ogTitle: 'Oluwasefunmi, Web Engineer',
  twitterTitle: 'Oluwasefunmi, Web Engineer',
  ogImage:
    'https://private-user-images.githubusercontent.com/60784068/425762057-1ca41a15-c65d-456c-af09-18a3391a7a81.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI2NjE1MzUsIm5iZiI6MTc0MjY2MTIzNSwicGF0aCI6Ii82MDc4NDA2OC80MjU3NjIwNTctMWNhNDFhMTUtYzY1ZC00NTZjLWFmMDktMThhMzM5MWE3YTgxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAzMjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMzIyVDE2MzM1NVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWU4YTA2MjhkMjg3ZjEyNTVjMDE3ZWEzMGE1ZjFmMTZiMTU2M2NkNTUzOWMxNzliYTdiMWMwYTY1NTMxOWUwODImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.WrBGtFpOeZzIvYvDlap9NUbgzEj3DCCOObGTnDR75Y0',
  description:
    'I am a full-stack web developer from Lagos, Nigeria focused on creating interactive digital experiences and tackling complex design challenges.',
  ogDescription:
    'I am a full-stack web developer from Lagos, Nigeria focused on creating interactive digital experiences and tackling complex design challenges.',
  twitterDescription:
    'I am a full-stack web developer from Lagos, Nigeria focused on creating interactive digital experiences and tackling complex design challenges.',
  twitterImage:
    'https://private-user-images.githubusercontent.com/60784068/425762057-1ca41a15-c65d-456c-af09-18a3391a7a81.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI2NjE1MzUsIm5iZiI6MTc0MjY2MTIzNSwicGF0aCI6Ii82MDc4NDA2OC80MjU3NjIwNTctMWNhNDFhMTUtYzY1ZC00NTZjLWFmMDktMThhMzM5MWE3YTgxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAzMjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMzIyVDE2MzM1NVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWU4YTA2MjhkMjg3ZjEyNTVjMDE3ZWEzMGE1ZjFmMTZiMTU2M2NkNTUzOWMxNzliYTdiMWMwYTY1NTMxOWUwODImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.WrBGtFpOeZzIvYvDlap9NUbgzEj3DCCOObGTnDR75Y0',
};

export default Home;
