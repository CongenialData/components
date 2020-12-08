import React from 'react';

/* Import components here */
import {
  StyledCircleButton,
  Title,
  TitleAndIcon,
} from './circle-button.styles';

/* Import interfaces here */
import { ICircleButtonProps } from './circle-button.interfaces';
import { circleButtonTheme } from './circle-button.theme';
import { IThemedComponent } from '../theming';

export const _CircleButton = React.forwardRef<
  HTMLButtonElement,
  ICircleButtonProps
>(function CirceButton(
  {
    children,
    className,
    onClick,
    icon,
    size = 'medium',
    horizontalSpacing = 'normal',
    verticalSpacing = 'normal',
    style,
    title,
    type,
    variant = 'primary',
    disabled,
  }: ICircleButtonProps,
  ref
): JSX.Element {
  return (
    <StyledCircleButton
      ref={ref}
      className={className}
      disabled={disabled}
      horizontalSpacing={horizontalSpacing}
      size={size}
      style={style}
      type={type}
      variant={variant}
      verticalSpacing={verticalSpacing}
      onClick={onClick}
    >
      {!!title || !!icon ? (
        <TitleAndIcon>
          {icon}
          {title && <Title props={{ size }}>{title}</Title>}
        </TitleAndIcon>
      ) : null}
      {children}
    </StyledCircleButton>
  );
});

type TCircleButton = typeof _CircleButton & IThemedComponent;
export const CircleButton: TCircleButton = _CircleButton;

CircleButton.defaultTheme = circleButtonTheme;
