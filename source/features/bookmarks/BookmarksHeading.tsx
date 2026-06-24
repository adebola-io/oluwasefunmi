import { createUnique } from "retend";
import { UniqueTransition } from "retend-utils/components";

export const BookmarksHeading = createUnique(() => {
  return (
    <UniqueTransition
      transitionDuration="var(--motion-duration-medium)"
      respectParentTransform={false}
    >
      <div style="width: fit-content">Bookmarks</div>
    </UniqueTransition>
  );
});
