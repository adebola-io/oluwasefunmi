import { For } from 'retend';
import { useRouter } from 'retend/router';

export function Navigation() {
  const { Link } = useRouter();
  const links = [
    {
      name: 'home',
      path: '/home',
    },
    {
      name: 'works',
      path: '/works',
    },
    {
      name: 'contact',
      path: '/contact',
    },
    {
      name: 'random notes',
      path: '/random-notes',
    },
    {
      name: 'playground',
      path: '/playground',
    },
  ];

  return (
    <nav class="grid grid-cols-[repeat(5,auto)_1fr] gap-2 [&>*]:[align-self:center] h-4">
      {For(links, (link) => (
        <Link
          class={[
            'inline-block pb-[calc(var(--spacing)*.25)] px-0.5 relative text-nowrap [[active]]:font-bold not-[[active]]:text-inactive-nav-link',
            'transition-[font-weight,color]',
            'before:block before:absolute before:bottom-0 before:w-full before:h-[2px] before:rounded-xl before:bg-stroke not-[[active]]:before:bg-inactive-nav-link before:scale-[0_1] before:transition-[scale] before:[transform-origin:0%_0%]',
            'not-hover:before:delay-[calc(var(--duration)*.75)] hover:before:scale-100',
            'max-md:hidden',
          ]}
          href={link.path}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
