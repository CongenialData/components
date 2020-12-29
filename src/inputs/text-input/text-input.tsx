/* eslint-disable react/prop-types */ // TODO: Remove disable rule and make it work
import React from "react";

/* Import components here */
import { Caption } from "../../typography/caption";
import { Label } from "../../typography/label";
import { InputWrapper, StyledInput } from "./text-input.styles";

/* Import interfaces here */
import { TextInputProps } from "./text-input.interfaces";
import { textInputTheme } from "./text-input.theme";
import { ThemedComponent } from "../../theming";

type TTextInput = React.ForwardRefExoticComponent<
  TextInputProps & React.RefAttributes<HTMLInputElement>
> &
  ThemedComponent;

export const TextInput: TTextInput = React.forwardRef<
  HTMLInputElement,
  TextInputProps
>(
  (
    {
      autoComplete,
      caption,
      captionType,
      className,
      disabled,
      fieldSize = "medium",
      fullWidth = false,
      id,
      inputRef,
      inputType = "text",
      label,
      name,
      onBlur,
      onChange,
      onClick,
      onFocus,
      pattern,
      placeholder,
      required,
      shape = "rectangle",
      status = "basic",
      step,
      value,
    },
    ref
  ): JSX.Element => {
    const [myID] = React.useState(id || Math.random().toString());

    return (
      <InputWrapper ref={ref}>
        {!!label && <Label htmlFor={myID}>{label}</Label>}
        <StyledInput
          ref={inputRef}
          autoComplete={autoComplete}
          className={className}
          disabled={disabled}
          fieldSize={fieldSize}
          fullWidth={fullWidth}
          id={myID}
          name={name}
          pattern={pattern}
          placeholder={placeholder}
          required={required}
          shape={shape}
          status={status}
          step={step}
          type={inputType}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          onClick={onClick}
          onFocus={onFocus}
        />
        {caption && typeof caption === "string" ? (
          <Caption status={status} type={captionType}>
            {caption}
          </Caption>
        ) : (
          caption
        )}
      </InputWrapper>
    );
  }
);

TextInput.defaultTheme = textInputTheme;
TextInput.displayName = "TextInput";
