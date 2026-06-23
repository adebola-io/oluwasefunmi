import { For, If } from "retend";
import { Link } from "retend/router";
import listClasses from "@/components/layout/SimpleListPage.module.css";
import uiClasses from "@/components/ui/ui.module.css";
import { playgroundItems } from "@/features/playground/data/playground";
import classes from "./HomePage.module.css";

export const PlaygroundTabPanel = () => {
  return (
    <section class={classes.tabPanel} aria-labelledby="playground-tab-heading">
      <div class={uiClasses.sectionHeading} id="playground-tab-heading">
        <h2 class={uiClasses.sectionHeadingContent}>Playground</h2>
      </div>
      <ul class={listClasses.list}>
        {For(playgroundItems, (item) => {
          const Description = item.description;
          const Icon = item.icon;

          return (
            <li
              class={[
                listClasses.item,
                { [listClasses.hasIcon]: Boolean(Icon) },
              ]}
            >
              {If(Boolean(Icon), () => (
                <span class={listClasses.itemIcon}>
                  <Icon />
                </span>
              ))}
              <Link
                class={listClasses.itemContent}
                href={item.path}
                title={item.title}
              >
                <h3 class={listClasses.itemTitle} title={item.title}>
                  {item.title}
                </h3>
                <div class={listClasses.itemSubtitle}>
                  <Description />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
