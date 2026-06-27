import RandomNote from "@/features/notes/RandomNotePage";
import RandomNotes from "@/features/notes/RandomNotesPage";

export default {
  path: "/random-notes",
  children: [
    { path: "/", component: RandomNotes },
    { path: "/:slug", component: RandomNote },
  ],
};
