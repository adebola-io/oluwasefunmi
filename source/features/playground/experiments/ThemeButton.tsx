import { Cell } from "retend";
import classes from "./CssKeyboard.module.css";

interface ThemeButtonProps {
  name: string;
  isActive: Cell<boolean>;
  color: string;
  onClick: () => void;
}

export const ThemeButton = (props: ThemeButtonProps) => {
  const { name, isActive, color, onClick } = props;
  return (
    <button
      type="button"
      class={[classes.themeButton, { [classes.activeTheme]: isActive }]}
      onClick={onClick}
    >
      <div class={classes.colorPreview} style={{ background: color }} />
      {name}
    </button>
  );
};
