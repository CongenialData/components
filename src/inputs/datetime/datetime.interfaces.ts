import { ComponentStatus } from '../../theming/styled'

export interface DateTimeInputProps {
  inputRef?: React.Ref<HTMLInputElement>
  label: string
  name: string
  status: ComponentStatus
  onChange: (value: string) => void
}
