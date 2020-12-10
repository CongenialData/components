import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

export interface ToolbarItemStyleProps {
  flex?: number | string
}

export interface ToolbarItemComponentProps {
  children: React.ReactChild | React.ReactChild[]
  icon?: IconDefinition
}

export interface ToolbarItemProps extends ToolbarItemComponentProps, ToolbarItemStyleProps {}
