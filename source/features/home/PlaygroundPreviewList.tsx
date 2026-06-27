import { For } from "retend";
import { Link } from "retend/router";
import listClasses from "@/components/layout/SimpleListPage.module.css";
import { playgroundItems } from "@/features/playground/data/playground";

export const PlaygroundPreviewList = () => {
  return (
    <ul class={[listClasses.list, "staggering"]}>
      {For(playgroundItems.slice(0, 3), (item) => {
        const Description = item.description;

        return (
          <li class={listClasses.item}>
            <div class={listClasses.itemContent}>
              <h3 class={listClasses.itemTitle} title={item.title}>
                <Link
                  class={listClasses.itemTitleLink}
                  href={item.path}
                  title={item.title}
                >
                  {item.title}
                </Link>
              </h3>
              <div class={listClasses.itemSubtitle}>
                <Description />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
