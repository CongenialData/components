import { IconDefinition } from '@fortawesome/pro-duotone-svg-icons';

export interface ToolbarItemStyleProps {
  flex?: number | string;
}

export interface ToolbarItemComponentProps {
  icon?: IconDefinition;
}

export interface ToolbarItemProps
  extends ToolbarItemComponentProps,
    ToolbarItemStyleProps {}
