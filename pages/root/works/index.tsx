import { For } from 'retend';
import { type RouteComponent } from 'retend/router';
import type { PageMeta } from 'retend-server/client';
import { Plane } from '@/components/plane';
import { ItemNameText, LargeText, SmallText } from '@/components/typography';
import { timeline, projects } from '@/library';
import { ArrowIcon } from '@/components/icons/arrow';

const Works: RouteComponent<PageMeta> = () => {
  return (
    <Plane
      animated
      topLevel
      class="grid gap-4 max-md:gap-2 px-6 max-md:px-2 max-md:mb-4 py-6 max-md:py-4 other-backdrop"
    >
      <div class="grid gap-1 max-md:gap-0 max-md:text-center">
        <LargeText underline>my projects.</LargeText>
        <p class="max-w-[600px]">
          Here's a curated collection of my works, highlighting my past
          achievements and current projects. This selection showcases my growth
          as a developer.
        </p>
      </div>
      <ul
        class={[
          'grid grid-cols-12 gap-4',
          'max-lg:grid-cols-1 max-lg:grid-flow-row',
        ]}
      >
        {For(projects, (project) => (
          <li
            class={[
              'min-h-[300px] max-w-[120dvh]',
              'max-lg:col-span-1 max-lg:row-span-1',
              '[--arrow-opacity:0] [--arrow-translate-x:0]',
              'hover:[--icon-opacity:1] hover:[--arrow-opacity:1] hover:[--arrow-translate-x:20%]',
              'active:[--icon-opacity:1] active:[--arrow-opacity:1] active:[--arrow-translate-x:20%]',
              project.class,
            ]}
          >
            <a
              rel="noreferrer"
              target="__blank"
              class="contents"
              href={project.link}
            >
              <Plane
                noise
                animated
                elevateOnHover
                animationDelay={timeline[1]}
                container:class="w-full h-full"
                class={[
                  'grid [div]:bg-solid p-3 grid-rows-[1fr_auto_auto] text-left',
                  'max-sm:px-2',
                ]}
              >
                <project.icon
                  class={[
                    'self-center justify-self-center',
                    'h-11 w-11 max-w-[70%] aspect-square opacity-(--icon-opacity) duration-[calc(var(--duration)*1.25)] transition-opacity',
                    'max-lg:max-h-13 max-lg:max-w-13',
                  ]}
                />
                <ItemNameText class="[h2]:flex items-center text-(--primary-color) opacity-[calc(var(--icon-opacity)+.5)] duration-[calc(var(--duration)*1.25)] transition-colors">
                  {project.name}.
                  <ArrowIcon class="h-3 w-3 opacity-(--arrow-opacity) translate-x-(--arrow-translate-x) duration-[calc(var(--duration)*1.25)] transition-[opacity,translate]" />
                </ItemNameText>
                <p class="text-stroke">{project.description}</p>
                <ul class="flex flex-wrap gap-0.5 mt-2 max-md:hidden">
                  {For(project.tags, (tag) => (
                    <li
                      class={[
                        'flex-auto text-center text-(--primary-color) px-2',
                        'border-(--primary-color) border-dashed border-2',
                        'opacity-[calc(var(--icon-opacity)+.3)] brightness-75 duration-[calc(var(--duration)*1.25)] transition-[opacity,color]',
                      ]}
                    >
                      <SmallText>{tag}</SmallText>
                    </li>
                  ))}
                </ul>
              </Plane>
            </a>
          </li>
        ))}
      </ul>
    </Plane>
  );
};

Works.metadata = {
  title: 'My Works | Oluwasefunmi, Web Developer',
  ogTitle: 'My Works | Oluwasefunmi, Web Developer',
  ogImage:
    'https://private-user-images.githubusercontent.com/60784068/425762080-394aac24-b453-4729-9cfa-aa92f4b3da00.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI2NjE1MzUsIm5iZiI6MTc0MjY2MTIzNSwicGF0aCI6Ii82MDc4NDA2OC80MjU3NjIwODAtMzk0YWFjMjQtYjQ1My00NzI5LTljZmEtYWE5MmY0YjNkYTAwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAzMjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMzIyVDE2MzM1NVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPThmYjg1NWExZGFjNWU4YTFiNmJjYWFkOWZmNzdmNzIzMDQxMzMwYmNjZWY3ZTllNTVmODk5YjZiZmZlN2NkYmQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.bI3ZrxZVUj-xH368bxTpnGyUPzkL_e1JYXAAjTg4a8w',
  twitterTitle: 'My Works | Oluwasefunmi, Web Developer',
  description: 'Some projects I am involved in.',
  twitterDescription: 'Some projects I am involved in.',
  ogDescription: 'Some projects I am involved in.',
  twitterImage:
    'https://private-user-images.githubusercontent.com/60784068/425762080-394aac24-b453-4729-9cfa-aa92f4b3da00.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI2NjE1MzUsIm5iZiI6MTc0MjY2MTIzNSwicGF0aCI6Ii82MDc4NDA2OC80MjU3NjIwODAtMzk0YWFjMjQtYjQ1My00NzI5LTljZmEtYWE5MmY0YjNkYTAwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAzMjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMzIyVDE2MzM1NVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPThmYjg1NWExZGFjNWU4YTFiNmJjYWFkOWZmNzdmNzIzMDQxMzMwYmNjZWY3ZTllNTVmODk5YjZiZmZlN2NkYmQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.bI3ZrxZVUj-xH368bxTpnGyUPzkL_e1JYXAAjTg4a8w',
};

export default Works;
