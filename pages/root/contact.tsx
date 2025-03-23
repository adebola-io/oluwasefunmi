import { useRouter, type RouteComponent } from 'retend/router';
import type { PageMeta } from 'retend-server/client';
import { Box } from '@/components/box';
import { Plane } from '@/components/plane';
import { LargeText } from '@/components/typography';
import { TwitterIcon } from '@/components/icons/twitter';
import { GitHubIcon } from '@/components/icons/github';
import { BlueSkyIcon } from '@/components/icons/bluesky';
import { LinkedInIcon } from '@/components/icons/linkedin';

const Contact: RouteComponent<PageMeta> = () => {
  const { Link } = useRouter();
  return (
    <Plane
      topLevel
      animated
      class="grid px-3 place-items-center place-content-center other-backdrop gap-3 text-center"
    >
      <Box class="w-[min(50dvh,50dvw)] h-auto" />
      <div class="grid gap-1 w-full place-items-center">
        <p class="max-w-[487px]">
          Got a cool idea or a big dream? Don't just sit on it! Hit me up, and
          let's turn it into something awesome together! You can reach me at:
        </p>
        <LargeText
          underline
          class={[
            'text-center [h1]:max-lg:text-[40px] [h1]:max-md:text-[1.5rem] [h1]:max-sm:text-[1.1rem]',
            'hover:text-link hover:scale-95 transition-[scale,color] view-transition-heading',
          ]}
        >
          <a href="mailto:adebolaakomolafe@gmail.com">
            adebolaakomolafe@gmail.com
          </a>
        </LargeText>
      </div>
      <div class="grid gap-1 w-full place-items-center">
        <span>
          You could also{' '}
          <a
            data-inline
            download="oluwasefunmi-akomolafe.pdf"
            href="./oluwasefunmi-akomolafe.pdf"
          >
            read my resume
          </a>
          , or find me on these platforms:
        </span>
        <ul class="flex gap-1 text-link">
          <li>
            <Link
              rel="noreferrer"
              target="__blank"
              href="https://www.twitter.com/adebola_io"
            >
              <TwitterIcon class="h-2 w-2" />
            </Link>
          </li>
          <li>
            <Link
              rel="noreferrer"
              target="__blank"
              href="https://www.linkedin.com/in/oluwasefunmi-akomolafe-3a6a42214/"
            >
              <LinkedInIcon class="h-2 w-2" />
            </Link>
          </li>
          <li>
            <Link
              rel="noreferrer"
              target="__blank"
              href="https://bsky.app/profile/adebola.online"
            >
              <BlueSkyIcon class="h-2 w-2" />
            </Link>
          </li>
          <li>
            <Link
              rel="noreferrer"
              target="__blank"
              href="https://www.github.com/adebola-io"
            >
              <GitHubIcon class="h-2 w-2" />
            </Link>
          </li>
        </ul>
      </div>
    </Plane>
  );
};

const ogImage =
  'https://github.com/user-attachments/assets/e7a8c2aa-4c7c-48de-ad44-0a511b4563ad';
Contact.metadata = {
  title: 'Contact Me | Oluwasefunmi, Web Developer',
  ogTitle: 'Contact Me | Oluwasefunmi, Web Developer',
  ogImage,
  twitterTitle: 'Contact Me | Oluwasefunmi, Web Developer',
  description: 'This is how you can reach me.',
  ogDescription: 'This is how you can reach me.',
  twitterDescription: 'This is how you can reach me.',
  twitterImage: ogImage,
};

export default Contact;
