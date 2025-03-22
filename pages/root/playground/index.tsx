import type { RouteComponent } from 'retend/router';
import type { PageMeta } from 'retend-server/client';
import { LargeText } from '@/components/typography';

const Playground: RouteComponent<PageMeta> = () => {
  return (
    <div class="grid grid-rows-[auto_auto_1fr] py-4 max-md:px-1.5 relative top-level-bare">
      <LargeText underline class="mb-1">
        playground.
      </LargeText>
      <p class="max-w-[487px]">
        An area for development, learning, and creativity. Coding experiments,
        design explorations, and whatever creative projects come to mind.
      </p>
    </div>
  );
};

Playground.metadata = {
  title: 'Playground | Oluwasefunmi, Web Developer',
  ogTitle: 'Playground | Oluwasefunmi, Web Developer',
  twitterTitle: 'Playground | Oluwasefunmi, Web Developer',
  twitterImage:
    'https://private-user-images.githubusercontent.com/60784068/425762115-46dc9603-a5d5-4e6c-a661-4e2ee1cc30c6.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI2NjE3OTcsIm5iZiI6MTc0MjY2MTQ5NywicGF0aCI6Ii82MDc4NDA2OC80MjU3NjIxMTUtNDZkYzk2MDMtYTVkNS00ZTZjLWE2NjEtNGUyZWUxY2MzMGM2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAzMjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMzIyVDE2MzgxN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTY0MDJlMDE3NTY2YzliOGFlNzc1OTE2OTIyMmZhYmMxOTU1YjZmNWRiMWIyMWI0MjEyYmVhYjcwNzQ4Y2ViNTYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.NVf6IxpcnT0n3kExbiQThkldvfCJ93AGAnLmpejUH4c',
  ogImage:
    'https://private-user-images.githubusercontent.com/60784068/425762115-46dc9603-a5d5-4e6c-a661-4e2ee1cc30c6.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI2NjE3OTcsIm5iZiI6MTc0MjY2MTQ5NywicGF0aCI6Ii82MDc4NDA2OC80MjU3NjIxMTUtNDZkYzk2MDMtYTVkNS00ZTZjLWE2NjEtNGUyZWUxY2MzMGM2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAzMjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMzIyVDE2MzgxN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTY0MDJlMDE3NTY2YzliOGFlNzc1OTE2OTIyMmZhYmMxOTU1YjZmNWRiMWIyMWI0MjEyYmVhYjcwNzQ4Y2ViNTYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.NVf6IxpcnT0n3kExbiQThkldvfCJ93AGAnLmpejUH4c',
  description:
    'An area for development, learning, and creativity. Coding experiments, design explorations, and whatever creative projects come to mind.',
  ogDescription:
    'An area for development, learning, and creativity. Coding experiments, design explorations, and whatever creative projects come to mind.',
  twitterDescription:
    'An area for development, learning, and creativity. Coding experiments, design explorations, and whatever creative projects come to mind.',
};

export default Playground;
