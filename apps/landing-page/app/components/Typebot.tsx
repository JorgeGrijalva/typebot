import { lazy } from "react";

export const Norobot = lazy(() =>
  import("@typebot.io/react").then((m) => ({ default: m.Standard })),
);
