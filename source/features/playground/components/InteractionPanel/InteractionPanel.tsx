import { Cell, For, If, type SourceCell } from "retend";
import type { JSX } from "retend/jsx-runtime";
import { SettingsIcon } from "@/components/icons/settings";
import classes from "./InteractionPanel.module.css";

export interface ModeOption {
  value: string;
  label: string;
  hint?: string;
}

export interface HeaderAction {
  icon: (props: { class?: unknown }) => JSX.Element;
  title: string;
  isActive?: Cell<boolean>;
  onClick: () => void;
}

export interface InteractionPanelProps {
  /** Controlled mode state - if not provided, mode section is hidden */
  mode?: SourceCell<string>;
  /** Available mode options */
  modeOptions?: ModeOption[];
  /** Optional title for the mode section */
  modeTitle?: string;
  /** Optional initial open state (defaults to true) */
  initialOpen?: boolean;
  /** Optional controlled open state */
  isOpen?: SourceCell<boolean>;
  /** Additional header action buttons (besides settings toggle) */
  headerActions?: HeaderAction[];
  /** Optional additional content rendered below the mode selector */
  children?: JSX.Children;
  /** Whether the panel should be dimmed until hovered or focused */
  dimmed?: JSX.ValueOrCell<boolean>;
  /** Optional custom class for the UI layer */
  class?: unknown;
}

export const InteractionPanel = (props: InteractionPanelProps) => {
  const {
    mode,
    modeOptions = [],
    modeTitle = "Interaction Mode",
    initialOpen = true,
    isOpen: controlledIsOpen,
    headerActions = [],
    children,
    dimmed,
    class: className,
  } = props;

  const internalIsOpen = Cell.source(initialOpen);
  const isOpen = controlledIsOpen ?? internalIsOpen;
  const isHidden = Cell.derived(() => !isOpen.get());

  const toggleOpen = () => {
    if (controlledIsOpen) {
      controlledIsOpen.set(!controlledIsOpen.get());
    } else {
      internalIsOpen.set(!internalIsOpen.get());
    }
  };

  const currentHint = Cell.derived(() => {
    if (!mode || !modeOptions) return null;
    const currentMode = mode.get();
    const option = modeOptions.find((opt) => opt.value === currentMode);
    return option?.hint ?? null;
  });

  const hasModeSection = mode && modeOptions.length > 0;

  return (
    <div class={[classes.uiLayer, className]}>
      <div class={classes.headerActions}>
        {For(headerActions, (action) => {
          const Icon = action.icon;
          return (
            <button
              type="button"
              class={[
                classes.iconButton,
                { [classes.active]: action.isActive },
              ]}
              onClick={action.onClick}
              title={action.title}
            >
              <Icon />
            </button>
          );
        })}
        <button
          type="button"
          class={[classes.iconButton, { [classes.active]: isOpen }]}
          onClick={toggleOpen}
          title="Toggle Controls"
        >
          <SettingsIcon />
        </button>
      </div>

      <div
        class={[
          classes.controlsPanel,
          {
            [classes.controlsHidden]: isHidden,
            [classes.dimmed]: dimmed,
          },
        ]}
      >
        <div class={classes.scrollableContent}>
          {If(hasModeSection ?? false, {
            true: () => (
              <div class={classes.section}>
                <h3>{modeTitle}</h3>
                <div class={classes.segmentedControl}>
                  {For(modeOptions, (option) => {
                    const isActive = Cell.derived(
                      () => mode?.get() === option.value,
                    );
                    return (
                      <button
                        type="button"
                        class={[
                          classes.segmentButton,
                          { [classes.activeSegment]: isActive },
                        ]}
                        onClick={() => mode?.set(option.value)}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
                {If(currentHint, {
                  true: (hint) => <p class={classes.modeHint}>{hint}</p>,
                  false: () => null,
                })}
              </div>
            ),
            false: () => null,
          })}

          {children}
        </div>
      </div>
    </div>
  );
};
