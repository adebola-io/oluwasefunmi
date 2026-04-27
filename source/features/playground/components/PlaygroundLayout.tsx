import { If } from "retend";
import { useRouter } from "retend/router";
import type { JSX } from "retend/jsx-runtime";
import { ArrowLeftIcon } from "@/components/icons/arrow-left";
import classes from "./PlaygroundLayout.module.css";

interface PlaygroundLayoutProps {
  title: string;
  hint?: string;
  backLabel?: JSX.ValueOrCell<string>;
  onBack?: () => void | Promise<void>;
  children: JSX.Template;
}

export function PlaygroundLayout(props: PlaygroundLayoutProps) {
  const {
    title,
    hint,
    backLabel = "back to playground",
    onBack,
    children,
  } = props;
  const router = useRouter();
  const handleBack = () => (onBack ? onBack() : router.navigate("/playground"));

  return (
    <>
      <header class={classes.header}>
        <button type="button" class={classes.backLink} onClick={handleBack}>
          <ArrowLeftIcon />
          <span>{backLabel}</span>
        </button>
        <h1 class={classes.title}>{title}</h1>
      </header>
      {children}
      {If(hint, () => (
        <div class={classes.hint}>{hint}</div>
      ))}
    </>
  );
}
