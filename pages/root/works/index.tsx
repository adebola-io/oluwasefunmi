import { For } from 'retend';
import { useRouter, type RouteComponent } from 'retend/router';
import type { PageMeta } from 'retend-server/client';
import { Plane } from '@/components/plane';
import { ItemNameText, LargeText, SmallText } from '@/components/typography';
import { timeline, projects } from '@/library';
import { ArrowIcon } from '@/components/icons/arrow';

const Works: RouteComponent<PageMeta> = () => {
  const { Link } = useRouter();

  return (
    <Plane animated class="grid gap-4 px-6 py-6 other-backdrop">
      <div class="grid gap-1">
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
              project.class,
            ]}
          >
            <Link class="contents" href={project.link}>
              <Plane
                noise
                animated
                elevateOnHover
                animationDelay={timeline[1]}
                container:class="w-full h-full"
                class="grid [div]:bg-solid p-3 grid-rows-[1fr_auto_auto] text-left"
              >
                <project.icon
                  class={[
                    'self-center justify-self-center',
                    'h-11 w-11 max-w-[70%] aspect-square opacity-(--icon-opacity) duration-[calc(var(--duration)*1.25)] transition-opacity',
                    'max-lg:max-h-13 max-lg:max-w-13',
                  ]}
                />
                <ItemNameText class="[h2]:flex items-center text-(--primary-color) opacity-[calc(var(--icon-opacity)+.5)] transition-colors">
                  {project.name}.
                  <ArrowIcon class="h-3 w-3 opacity-(--arrow-opacity) translate-x-(--arrow-translate-x) transition-[opacity,translate]" />
                </ItemNameText>
                <p class="text-stroke">{project.description}</p>
                <ul class="flex flex-wrap gap-0.5 mt-2">
                  {For(project.tags, (tag) => (
                    <li
                      class={[
                        'flex-auto text-center text-(--primary-color) px-2',
                        'border-(--primary-color) border-dashed border-2',
                        'opacity-[calc(var(--icon-opacity)+.3)] brightness-75 transition-[opacity,color]',
                      ]}
                    >
                      <SmallText>{tag}</SmallText>
                    </li>
                  ))}
                </ul>
              </Plane>
            </Link>
          </li>
        ))}
      </ul>
    </Plane>
  );
};

Works.metadata = {
  title: 'My Works | Oluwasefunmi, Web Developer',
  description: 'This is the works page',
};

export default Works;
