import React, { useCallback, useEffect, useRef, useState } from "react";

/* Import components here */
import { Line, StyledDateTimeInput } from "./datetime.styles";
import { TextInput } from "../../inputs/text-input";
import { Label } from "../../typography/label";

/* Import interfaces here */
import { DateTimeInputProps } from "./datetime.interfaces";

/* Import utilities here */
import { dateTimeInputTheme } from "./datetime.theme";
import { Writeable, isRefObject } from "../../utils";

const fireEvent = (eventName: string, element: HTMLInputElement) => {
  setTimeout(() => {
    const event = new Event(eventName, { bubbles: true, cancelable: true });
    element.dispatchEvent(event);
  }, 0);
};

export const DateTimeInput = (props: DateTimeInputProps): JSX.Element => {
  const { label, inputRef, name, status, onChange } = props;
  const [dateValue, setDateValue] = useState("");
  const [timeValue, setTimeValue] = useState("");
  const hiddenInputRef = useRef<HTMLInputElement>();
  const onChangeRef = useRef(onChange);

  const updateHiddenValue = (date: string, time: string): void => {
    if (hiddenInputRef.current === undefined) return;

    const value = date + "T" + time;
    hiddenInputRef.current.value = value;
  };

  const onChangeDate = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      updateHiddenValue(e.target.value, timeValue);
      hiddenInputRef.current && fireEvent("input", hiddenInputRef.current);
    },
    [timeValue]
  );

  const onChangeTime = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      updateHiddenValue(dateValue, e.target.value);
      hiddenInputRef.current && fireEvent("input", hiddenInputRef.current);
    },
    [dateValue]
  );

  const handleBlur = useCallback(() => {
    hiddenInputRef.current && fireEvent("blur", hiddenInputRef.current);
  }, []);

  // Store onChange in a ref, so it can be used without triggering other effects
  // if it's updated
  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    if (hiddenInputRef.current === undefined) return;

    // Redefined the value property on the hidden input to catch changes from
    // react-hook-forms

    const originalValuePropertyDescriptor = Object.getOwnPropertyDescriptor(
      hiddenInputRef.current,
      "value"
    );
    if (originalValuePropertyDescriptor === undefined)
      throw new Error("Unable to get descriptor");

    Object.defineProperty(
      hiddenInputRef.current,
      "_value",
      originalValuePropertyDescriptor
    );
    Object.defineProperty(hiddenInputRef.current, "value", {
      get() {
        return this._value;
      },
      set(value: string) {
        const [date, time] = value.split("T");
        setDateValue(date);
        setTimeValue(time);

        if (value !== this._value) {
          this._value = value;
          onChangeRef.current(value);
        }
      },
    });

    // Set initial values
    const { value } = hiddenInputRef.current;
    const [date, time] = value.split("T");
    setDateValue(date);
    setTimeValue(time);
  }, []);

  // eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
  const refCallback = (ref: HTMLInputElement): void => {
    hiddenInputRef.current = ref;

    if (!inputRef) return;

    // TODO: Fix correct types and remove disabled rules
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (isRefObject(inputRef)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line no-extra-semi
      (inputRef as Writeable<typeof inputRef>).current = ref;
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      inputRef(ref);
    }
  };

  return (
    <StyledDateTimeInput>
      {!!label && <Label>{label}</Label>}
      <Line>
        <div>
          <TextInput
            inputType="date"
            pattern="\d{4}-\d{2}-\d{2}"
            required={true}
            status={status}
            value={dateValue}
            onBlur={handleBlur}
            onChange={onChangeDate}
          />
        </div>
        <div>
          <TextInput
            inputType="time"
            pattern="\d{2}:\d{2}"
            required={true}
            status={status}
            step={15 * 60}
            value={timeValue}
            onBlur={handleBlur}
            onChange={onChangeTime}
          />
        </div>
      </Line>
      <input ref={refCallback} name={name} type="hidden" />
    </StyledDateTimeInput>
  );
};

DateTimeInput.defaultTheme = dateTimeInputTheme;
