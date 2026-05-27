import { Cell } from "retend";
import { PaperCtx, PaperScope } from "./PaperScope";
import { PaperBack, PaperFront } from "./PaperSides";
import { Slot } from "@/components/layout/Slot";
import classes from "./Paper.module.css";
import type { JSX } from "retend/jsx-runtime";

export interface PaperProps {
  children?: JSX.Children;
}

export function Paper(props: PaperProps) {
  const { children } = props;

  const ctx: PaperCtx = {
    slots: {
      front: Cell.source(null),
      back: Cell.source(null),
    },
  };
  return (
    <PaperScope.Provider value={ctx}>
      <div class={classes.paper}>
        <div data-front>
          <Slot content={ctx.slots.front} />
        </div>
        <div data-back>
          <Slot content={ctx.slots.back} />
        </div>
      </div>
      {children}
    </PaperScope.Provider>
  );
}

Paper.Front = PaperFront;
Paper.Back = PaperBack;
