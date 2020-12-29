import styled, { css } from "styled-components/macro";
import {
  CheckboxComponentProps,
  CheckboxRequiredStyleProps,
} from "./checkbox.interfaces";
import { componentAnimation, outline } from "../../theming/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Icon = styled(FontAwesomeIcon)``;

export const CheckboxWrapper = styled.label`
  ${({ theme: { Checkbox } }) => css`
    cursor: ${Checkbox.cursor};
    padding: ${Checkbox.padding};

    position: relative;
    align-items: center;
    margin: 0;
    min-height: inherit;

    display: flex;
    flex-direction: row;
  `};
`;

export const LabelAndCaption = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:empty) {
    padding-left: ${({ theme }) => theme.Checkbox.textSpace};
    /** TODO: Try to implement this is needed
       * https://github.com/akveo/nebular/blob/ecafd16f0839571bc0b86d36ab563e7cdb1c6840/src/framework/theme/styles/core/_mixins.scss#L322
       * @include nb-ltr(padding-left, nb-theme(checkbox-text-space));
       * @include nb-rtl(padding-right, nb-theme(checkbox-text-space));
       */
  }
`;

export const CustomCheckbox = styled.span<
  CheckboxComponentProps & CheckboxRequiredStyleProps
>`
  ${({ theme: { Checkbox }, checked, status }) => {
    return css`
      ${componentAnimation("background-color, border, box-shadow")};
      flex-shrink: 0;

      height: ${Checkbox.height};
      width: ${Checkbox.width};
      border-style: ${Checkbox.borderStyle};
      border-width: ${Checkbox.borderWidth};
      border-radius: ${Checkbox.borderRadius};
      outline-width: ${Checkbox.outlineWidth};

      display: flex;
      justify-content: center;
      align-items: center;
      align-self: start;
      margin-top: 0.125rem;

      /**
       * Status
       */
      background-color: ${Checkbox.status[status].backgroundColor};
      border-color: ${Checkbox.status[status].borderColor};

      /**
       * Checked
       */
      ${checked &&
      css`
        background-color: ${Checkbox.status[status].checkedBackgroundColor};
        border-color: ${Checkbox.status[status].checkedBorderColor};

        ${Icon} {
          color: ${Checkbox.status[status]
            .checkedCheckmarkColor}; /* TODO: Fungerar det här? */
        }
      `};

      &:hover {
        background-color: ${Checkbox.status[status].hoverBackgroundColor};
        border-color: ${Checkbox.status[status].hoverBorderColor};

        ${checked &&
        css`
          background-color: ${Checkbox.status[status]
            .hoverCheckedBackgroundColor};
          border-color: ${Checkbox.status[status].hoverCheckedBorderColor};
        `}
      }
    `;
  }};
`;

export const Text = styled.span<CheckboxRequiredStyleProps>`
  ${({ theme: { Checkbox }, status }) => css`
    ${componentAnimation("color")};

    font-family: ${Checkbox.textFontFamily};
    font-size: ${Checkbox.textFontSize};
    font-weight: ${Checkbox.textFontWeight};
    line-height: ${Checkbox.textLineHeight};

    color: ${Checkbox.status[status].textColor};
  `};
`;

const Hidden = styled.div`
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
`;

export const NativeInput = styled(Hidden.withComponent("input"))<
  CheckboxRequiredStyleProps & CheckboxComponentProps
>`
  ${({ theme: { Checkbox, support }, checked, status }) => css`
    ${outline(
      support.OUTLINE_WIDTH,
      support.OUTLINE_COLOR,
      Checkbox.focusInsetShadowLength
    )};

    &:focus:not(:checked) + ${CustomCheckbox} {
      ${outline(
        Checkbox.outlineWidth,
        Checkbox.outlineColor,
        Checkbox.focusInsetShadowLength
      )};
    }

    &:focus:checked + ${CustomCheckbox} {
      ${outline(Checkbox.outlineWidth, Checkbox.outlineColor)};
    }

    &:enabled:focus + ${CustomCheckbox} {
      background-color: ${Checkbox.status[status].focusBackgroundColor};
      border-color: ${Checkbox.status[status].focusBorderColor};

      ${checked &&
      css`
        background-color: ${Checkbox.status[status]
          .focusCheckedBackgroundColor};
        border-color: ${Checkbox.status[status].focusCheckedBorderColor};
      `};
    }

    &:enabled:active + ${CustomCheckbox} {
      background-color: ${Checkbox.status[status].activeBackgroundColor};
      border-color: ${Checkbox.status[status].activeBorderColor};

      ${checked &&
      css`
        background-color: ${Checkbox.status[status]
          .activeCheckedBackgroundColor};
        border-color: ${Checkbox.status[status].activeCheckedBorderColor};
      `};
    }

    &:disabled {
      & + ${CustomCheckbox} {
        background-color: ${Checkbox.status[status].disabledBackgroundColor};
        border-color: ${Checkbox.status[status].disabledBorderColor};

        ${Icon} {
          color: ${Checkbox.status[status].disabledCheckmarkColor};
        }
      }

      & ~ ${Text} {
        color: ${Checkbox.status[status].disabledTextColor};
      }

      &:checked + ${CustomCheckbox} {
        background-color: ${Checkbox.status[status]
          .disabledCheckedBackgroundColor};
        border-color: ${Checkbox.status[status].disabledCheckedBorderColor};
      }
    }
  `};
`;
