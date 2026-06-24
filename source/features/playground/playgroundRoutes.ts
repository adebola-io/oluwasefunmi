import Playground from "@/features/playground/PlaygroundPage";
import { playgroundExperimentRoutes } from "@/features/playground/playgroundExperimentRoutes";

export default {
  path: "/playground",
  children: [
    { path: "/", component: Playground },
    ...playgroundExperimentRoutes,
  ],
};
