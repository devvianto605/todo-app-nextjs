
export type StyledCheckboxProps = {
    checked: boolean;
    size?: string;
    borderRadius?: string;
    checkedColor?: string;
    uncheckedColor?: string;
    checkedHoverColor?: string;
    uncheckedHoverColor?: string;
    checkmarkColor?: string;
  }


export type CheckboxProps = {
    checked: boolean;
    size?: string;
    borderRadius?: string;
    checkedColor?: string;
    uncheckedColor?: string;
    checkedHoverColor?: string;
    uncheckedHoverColor?: string;
    checkmarkColor?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };