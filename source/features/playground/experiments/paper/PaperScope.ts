import { TemplateFn } from "@/components/layout/Slot";
import { createScope, SourceCell } from "retend";

interface PaperSlots {
  front: SourceCell<TemplateFn>;
  back: SourceCell<TemplateFn>;
}

export interface PaperCtx {
  slots: PaperSlots;
}

export const PaperScope = createScope<PaperCtx>("PaperScope");
