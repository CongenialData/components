/* eslint-disable react/prop-types */
import * as React from "react";

/* Import components here */
import { StyledButton } from "./button.styles";

/* Import interfaces here */
import { ButtonProps } from "./button.interfaces";
import { buttonTheme } from "./button.theme";

export const Button = ({
  children,
  className,
  appearance = "filled",
  disabled,
  fullWidth = false,
  onClick,
  pulse,
  type = "button",
  shape = "rectangle",
  size = "medium",
  status = "basic",
}: ButtonProps<HTMLButtonElement>): JSX.Element => {
  return (
    <StyledButton
      appearance={appearance}
      className={className}
      disabled={disabled}
      fullWidth={fullWidth}
      pulse={appearance === "hero" && !!pulse === true}
      role="button"
      shape={shape}
      size={size}
      status={status}
      type={type}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultTheme = buttonTheme;
