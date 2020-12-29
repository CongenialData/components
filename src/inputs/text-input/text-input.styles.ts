import styled, { css } from "styled-components/macro";

import { componentAnimation } from "../../theming/mixins";

import { TextInputRequiredStyleProps } from "./text-input.interfaces";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input<TextInputRequiredStyleProps>`
  ${({ fieldSize, fullWidth, status, shape, theme: { TextInput } }) => css`
    ${componentAnimation("border, background-color, color, box-shadow")};

    display: block;

    border-style: ${TextInput.borderStyle};
    border-width: ${TextInput.borderWidth};

    outline-color: ${TextInput.outlineColor};
    outline-width: ${TextInput.outlineWidth};

    width: 100%;
    -webkit-appearance: none; // removes inner shadow on iOS

    border-radius: ${TextInput.shape[shape]};

    background-color: ${TextInput.status[status].backgroundColor};
    border-color: ${TextInput.status[status].borderColor};
    color: ${TextInput.status[status].textColor};

    font-size: ${TextInput.size[fieldSize].textFontSize};
    font-weight: ${TextInput.size[fieldSize].textFontWeight};
    line-height: ${TextInput.size[fieldSize].textLineHeight};
    padding: ${TextInput.size[fieldSize].padding};

    font-family: ${TextInput.textFontFamily};

    max-width: ${fullWidth ? "100%" : TextInput.size[fieldSize].maxWidth};

    &:placeholder {
      text-overflow: ellipsis;
      font-family: ${TextInput.placeholderTextFontFamily};
      color: ${TextInput.status[status].placeholderTextColor};
      font-size: ${TextInput.size[fieldSize].placeholderTextFontSize};
      font-weight: ${TextInput.size[fieldSize].placeholderTextFontWeight};
      line-height: ${TextInput.size[fieldSize].placeholderTextLineHeight};
    }

    &:focus {
      outline: none;
      background-color: ${TextInput.status[status]};
      border-color: ${TextInput.status[status].focusBorderColor};
    }

    &:hover {
      background-color: ${TextInput.status[status].hoverBackgroundColor};
      border-color: ${TextInput.status[status].hoverBorderColor};
    }

    &:disabled {
      background-color: ${TextInput.status[status].disabledBackgroundColor};
      border-color: ${TextInput.status[status].disabledBorderColor};
      color: ${TextInput.status[status].disabledTextColor};

      &:placeholder {
        color: ${TextInput.status[status].disabledPlaceholderTextColor};
      }
    }
  `};
`;
