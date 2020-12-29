import * as React from "react";

/* Import components here */
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { Icon, RemoveIcon, StyledChip, Text } from "./chip.styles";

/* Import interfaces here */
import { ChipProps } from "./chip.interfaces";
import { chipTheme } from "./chip.theme";

/* Import utilities here */

export const Chip = ({
  className,
  disabled = false,
  icon,
  spinIcon,
  showRemove,
  text,
  maxWidth,
  onClick,
  ...restProps
}: ChipProps): JSX.Element => {
  return (
    // FIXME: kolla i Storybook på Chip. Det finns inte en bra default height
    <StyledChip
      className={className}
      disabled={disabled}
      maxWidth={maxWidth}
      onClick={!disabled ? onClick : undefined}
      {...restProps}
    >
      {icon && <Icon icon={icon} spin={spinIcon} />}
      <Text>{text}</Text>
      {showRemove && <RemoveIcon icon={faTimesCircle} size="2x" />}
    </StyledChip>
  );
};

Chip.defaultTheme = chipTheme;
