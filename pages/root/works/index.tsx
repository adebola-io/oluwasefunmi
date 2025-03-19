import { For } from 'retend';
import { useRouter, type RouteComponent } from 'retend/router';
import type { PageMeta } from 'retend-server/client';
import { Plane } from '@/components/plane';
import { LargeText } from '@/components/typography';
import { timeline, projects } from '@/library';

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
      <ul class="grid grid-cols-12 grid-rows-4 gap-4">
        {For(projects, (project) => {
          return (
            <li
              class={[
                'min-h-[300px] max-w-[120dvh] hover:[--icon-opacity:1]',
                project.class,
              ]}
            >
              <Link class="w-ful h-full" href={project.link}>
                <Plane
                  noise
                  animated
                  elevateOnHover
                  animationDelay={timeline[1]}
                  container:class="w-full h-full"
                  class="[div]:bg-solid grid place-items-center"
                >
                  <project.icon class="h-13 w-13 [grid-area:1/1] opacity-[var(--icon-opacity)] duration-[calc(var(--duration)*2)] transition-opacity" />
                  <span class="[grid-area:1/1] text-center" />
                </Plane>
              </Link>
            </li>
          );
        })}
      </ul>
    </Plane>
  );
};

Works.metadata = {
  title: 'My Works | Oluwasefunmi, Web Developer',
  description: 'This is the works page',
};

export default Works;
