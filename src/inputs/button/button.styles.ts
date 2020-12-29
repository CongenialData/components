import styled, { css } from "styled-components/macro";
import { componentAnimation, outline } from "../../theming/mixins";

import {
  ButtonOptionalStyleProps,
  ButtonRequiredStyleProps,
} from "./button.interfaces";

import { HeroButtonStyle } from "./hero.styles";
import { FilledButtonStyle } from "./filled.styles";
import { GhostButtonStyle } from "./ghost.styles";
import { OutlineButtonStyle } from "./outline.styles";

export const Title = styled.span``;

export const StyledButton = styled.button<
  ButtonRequiredStyleProps & ButtonOptionalStyleProps
>`
  ${componentAnimation("background-color, border-color, box-shadow, color")};

  appearance: none;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `};

  &:hover,
  &:focus {
    text-decoration: none;
  }

  cursor: ${({ theme }) => theme.Button.cursor};
  font-family: ${({ theme }) => theme.Button.textFontFamily};
  font-weight: ${({ theme }) => theme.Button.textFontWeight};

  &:focus {
    outline: none;
    ${({ theme }) =>
      outline(theme.support.OUTLINE_WIDTH, theme.support.OUTLINE_COLOR)};
  }

  &[disabled] {
    cursor: ${({ theme }) => theme.Button.disabledCursor};
  }

  /**
   * Sizes
   */
  font-size: ${({ theme, size }) => theme.Button.size[size].textFontSize};
  line-height: ${({ theme, size }) => theme.Button.size[size].textLineHeight};
  padding: ${({ theme, appearance, size }) =>
    theme.Button.appearance[appearance].size[size].padding};

  /**
   * Appearance
   */
  border-style: ${({ theme, appearance }) =>
    theme.Button.appearance[appearance].borderStyle};
  border-width: ${({ theme, appearance }) =>
    theme.Button.appearance[appearance].borderWidth};
  text-transform: ${({ theme, appearance }) =>
    theme.Button.appearance[appearance].textTransform};

  /**
   * Shapes
   */
  border-radius: ${({ theme, shape }) =>
    theme.Button.shape[shape].borderRadius};

  /**
   * Status
   */
  ${({ appearance, pulse, status }) => {
    if (appearance === "filled") return FilledButtonStyle(status);
    if (appearance === "ghost") return GhostButtonStyle(status);
    if (appearance === "hero") return HeroButtonStyle(status, !!pulse);
    if (appearance === "outline") return OutlineButtonStyle(status);
    return null;
  }}
`;
