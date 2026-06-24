import { For } from "retend";
import { Link } from "retend/router";
import listClasses from "@/components/layout/SimpleListPage.module.css";
import { playgroundItems } from "@/features/playground/data/playground";

export const PlaygroundPreviewList = () => {
  return (
    <ul class={listClasses.list}>
      {For(playgroundItems.slice(0, 3), (item) => {
        const Description = item.description;

        return (
          <li class={listClasses.item}>
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
  );
};
