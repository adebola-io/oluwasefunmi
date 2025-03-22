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
        <LargeText class="text-center [h1]:max-lg:text-[40px] [h1]:max-md:text-[1.5rem] [h1]:max-sm:text-[1.1rem] underline hover:text-link hover:scale-95 transition-[scale,color]">
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

Contact.metadata = {
  title: 'Contact Me | Oluwasefunmi, Web Developer',
  ogTitle: 'Contact Me | Oluwasefunmi, Web Developer',
  ogImage:
    'https://private-user-images.githubusercontent.com/60784068/425762101-ee8d7d0a-afc1-42fb-bfa6-d261efcc811d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI2NjE1MzUsIm5iZiI6MTc0MjY2MTIzNSwicGF0aCI6Ii82MDc4NDA2OC80MjU3NjIxMDEtZWU4ZDdkMGEtYWZjMS00MmZiLWJmYTYtZDI2MWVmY2M4MTFkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAzMjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMzIyVDE2MzM1NVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWUyYjFhYWYzMDkyYjY0NWMxOWExMDM3ZDAzYjIxODNhM2I4OWYyNDQ3ZDUyZGE1MDBjNTc4NmZhNjFjMmVkNDEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.Z0Yyh5bt23h1XscgUyIy8KtrgCOE-0OvdHFeuupHeFE',
  twitterTitle: 'Contact Me | Oluwasefunmi, Web Developer',
  description: 'This is how you can reach me.',
  ogDescription: 'This is how you can reach me.',
  twitterDescription: 'This is how you can reach me.',
  twitterImage:
    'https://private-user-images.githubusercontent.com/60784068/425762101-ee8d7d0a-afc1-42fb-bfa6-d261efcc811d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI2NjE1MzUsIm5iZiI6MTc0MjY2MTIzNSwicGF0aCI6Ii82MDc4NDA2OC80MjU3NjIxMDEtZWU4ZDdkMGEtYWZjMS00MmZiLWJmYTYtZDI2MWVmY2M4MTFkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAzMjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMzIyVDE2MzM1NVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWUyYjFhYWYzMDkyYjY0NWMxOWExMDM3ZDAzYjIxODNhM2I4OWYyNDQ3ZDUyZGE1MDBjNTc4NmZhNjFjMmVkNDEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.Z0Yyh5bt23h1XscgUyIy8KtrgCOE-0OvdHFeuupHeFE',
};

export default Contact;
