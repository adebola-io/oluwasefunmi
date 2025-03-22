import { Cell, For, If } from 'retend';
import { useRouter } from 'retend/router';
import { LargeText } from '@/components/typography';

export function Navigation() {
  const { Link } = useRouter();
  const sidebarIsOpen = Cell.source(false);

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

  const toggleSidebar = () => {
    sidebarIsOpen.value = !sidebarIsOpen.value;
  };

  const Sidebar = () => {
    return If(sidebarIsOpen, () => {
      return (
        <aside
          id="page-sidebar"
          class="fixed top-0 left-0 min-md:hidden w-screen h-screen grid py-4 px-2 gap-0.5 place-content-center"
        >
          {For(links, (link, index) => (
            <Link
              style={{
                animationDelay: `calc((var(--duration) * 0.5) + ${index.value} * var(--duration) * 0.25)`,
              }}
              class={[
                'pb-0.25 px-0.5 relative text-nowrap [[active]]:font-bold not-[[active]]:text-inactive-nav-link',
                'transition-[font-weight,color] animate-condense',
                'before:block before:absolute before:bottom-0 before:w-full before:h-0.25 before:rounded-xl before:bg-stroke not-[[active]]:before:bg-inactive-nav-link before:scale-[0_1] before:transition-[scale] before:[transform-origin:0%_0%]',
                'not-hover:before:delay-[calc(var(--duration)*.75)] hover:before:scale-100 [[active]]:before:scale-100',
              ]}
              href={link.path}
              onAfterNavigate={toggleSidebar}
            >
              <LargeText class="not-[[active]>*]:font-normal">
                {link.name}
              </LargeText>
            </Link>
          ))}
        </aside>
      );
    });
  };

  return (
    <nav
      id="page-nav"
      class={[
        'relative grid grid-cols-[repeat(5,auto)_1fr] gap-2 [&>*]:[align-self:center] h-4',
        'max-md:h-2 max-md:grid-cols-2',
      ]}
    >
      {For(links, (link) => (
        <Link
          class={[
            'inline-block pb-0.25 px-0.5 relative text-nowrap [[active]]:font-bold not-[[active]]:text-inactive-nav-link',
            'transition-[font-weight,color]',
            'before:block before:absolute before:bottom-0 before:w-full before:h-[2px] before:rounded-xl before:bg-stroke not-[[active]]:before:bg-inactive-nav-link before:scale-[0_1] before:transition-[scale] before:[transform-origin:0%_0%]',
            'not-hover:before:delay-[calc(var(--duration)*.75)] hover:before:scale-100 [[active]]:before:scale-100',
            'max-md:hidden',
          ]}
          href={link.path}
        >
          {link.name}
        </Link>
      ))}
      <Link
        href="/home"
        class="font-bold underline ml-1 text-link min-md:hidden"
      >
        oluwasefunmi
      </Link>
      <button
        class={[
          'z-2 grid grid-rows-2 place-items-center justify-self-end w-2.5 h-2 mr-1 transition-transform duration-[calc(var(--duration)*2)]',
          '[&>*]:w-full [&>*]:h-0.25 [&>*]:rounded-md [&>*]:bg-stroke [&>*]:transition-transform',
          '[&[data-sidebar-is-open]>:first-child]:rotate-45 [&[data-sidebar-is-open]>:nth-child(2)]:-rotate-45',
          '[[data-sidebar-is-open]]:rotate-180',
          '[&>*:first-child]:delay-[calc(var(--duration)*0.25)] [&>*:nth-child(2)]:delay-[calc(var(--duration)*0.5)]',
          '[&[data-sidebar-is-open]>:first-child]:translate-y-0.5 [&[data-sidebar-is-open]>:nth-child(2)]:-translate-y-0.5',
          'min-md:hidden',
        ]}
        type="button"
        title="Open Sidebar"
        onClick={toggleSidebar}
        data-sidebar-is-open={sidebarIsOpen}
      >
        <hr />
        <hr />
      </button>
      <Sidebar />
    </nav>
  );
}
