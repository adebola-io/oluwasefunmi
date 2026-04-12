import { For } from "retend";
import classes from "./ConnectWidget.module.css";
import type { SocialLink } from "../../data/socialLinks";

interface ConnectWidgetProps {
  links: SocialLink[];
}

export function ConnectWidget(props: ConnectWidgetProps) {
  const { links } = props;

  return (
    <div class={classes.widget}>
      <div class={classes.header}>
        <span class={classes.label}>Connect</span>
      </div>

      <div class={classes.links}>
        {For(links, (link: SocialLink) => (
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            data-pill-link
          >
            <span class={classes.icon}>
              <link.icon />
            </span>
            <span>{link.name}</span>
            <span class={classes.iconArrow}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 10L10 2M10 2H4M10 2V8"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
