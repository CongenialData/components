import React from "react";

import { faCheck } from "@fortawesome/free-solid-svg-icons";

/* Import components here */
import { Caption } from "../../typography/caption";
import {
  CheckboxWrapper,
  CustomCheckbox,
  Icon,
  LabelAndCaption,
  NativeInput,
  Text,
} from "./checkbox.styles";
// import { CheckboxWrapper, CustomCheckbox, HiddenCheckbox, Icon, Label } from './checkbox.styles'
import { checkboxTheme } from "./checkbox.theme";

/* Import interfaces here */
import { CheckboxProps } from "./checkbox.interfaces";

// Component
export const Checkbox = ({
  checked,
  className,
  disabled = false,
  id = Math.random().toString(),
  inputRef,
  onClick,
  label,
  caption,
  captionType,
  status = "basic",
}: CheckboxProps): JSX.Element => {
  return (
    <CheckboxWrapper className={className} htmlFor={id}>
      <NativeInput
        ref={inputRef}
        checked={checked}
        className="native-input visually-hidden"
        disabled={disabled}
        id={id}
        status={status}
        type="checkbox"
        onChange={onClick}
      />
      <CustomCheckbox checked={checked} status={status}>
        {checked && <Icon icon={faCheck} size="xs" />}
      </CustomCheckbox>
      <LabelAndCaption>
        {label && <Text status={status}>{label}</Text>}
        {caption && (
          <Caption status={status} type={captionType}>
            {caption}
          </Caption>
        )}
      </LabelAndCaption>
    </CheckboxWrapper>
  );
};
Checkbox.defaultTheme = checkboxTheme;
