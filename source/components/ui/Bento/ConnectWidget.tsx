import { Cell, For } from "retend";
import type { JSX } from "retend/jsx-runtime";
import classes from "./ConnectWidget.module.css";

interface SocialLink {
  name: string;
  url: string;
  icon: JSX.Element;
}

interface ConnectWidgetProps {
  links: SocialLink[];
}


export function ConnectWidget(props: ConnectWidgetProps) {
  const { links } = props;
  const linksCell = Cell.source(links);

  return (
    <div class={classes.widget}>
      <div class={classes.header}>
        <span class={classes.label}>Connect</span>
      </div>

      <div class={classes.links}>
        {For(linksCell, (link: SocialLink) => (
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            class={classes.linkCard}
          >
            <span class={classes.icon}>{link.icon}</span>
            <span class={classes.name}>{link.name}</span>
            <div class={classes.arrow}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 10L10 2M10 2H4M10 2V8"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
