import { playgroundExperimentRoutes } from "@/features/playground/playgroundExperimentRoutes";

export default {
  path: "/playground",
  children: playgroundExperimentRoutes,
};
