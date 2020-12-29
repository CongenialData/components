import { TComponentStatus } from "../../theming/styled";

export interface DateTimeInputProps {
  inputRef?: React.Ref<HTMLInputElement>;
  label: string;
  name: string;
  status: TComponentStatus;
  onChange: (value: string) => void;
}
