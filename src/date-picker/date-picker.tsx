import _ from "lodash";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { format } from "date-fns";

/* Import components here */
import { Calendar } from "../calendar";
import { InputWrapper } from "../inputs";
import { Label } from "../typography/label";
import { TextInput } from "../inputs/text-input";
import {
  StyledDatePicker,
  StyledDialogBox,
  StyledSelect,
  TimeWrapper,
} from "./date-picker.styles";

/* Import interfaces here */
import { DatePickerProps } from "./date-picker.interfaces";
import { datePickerTheme } from "./date-picker.theme";

import { Writeable, isRefObject } from "../utils";

const MINUTES = ["00", "15", "30", "45"];

const fireEvent = (eventName: string, element: HTMLInputElement) => {
  setTimeout(() => {
    const event = new Event(eventName, { bubbles: true, cancelable: true });
    element.dispatchEvent(event);
  }, 0);
};

export const DatePicker = ({
  className,
  disabled = false,
  openInDialog = false,
  label,
  initialValue,
  inputRef,
  status = "basic",
  minTime = "00:00",
  maxTime = "24:00",
  name,
  onChange,
}: DatePickerProps): JSX.Element => {
  const hours = _.range(
    parseInt(minTime.split(":")[0]),
    parseInt(maxTime.split(":")[0]) + 1
  )
    .map(String)
    .map((h) => h.padStart(2, "0"));

  const [dateValue, setDateValue] = useState("");
  const [hourValue, setHourValue] = useState(hours[0]);
  const [minuteValue, setMinuteValue] = useState(MINUTES[0]);

  const defaultDate = initialValue || new Date();
  const [month, setMonth] = useState(defaultDate);

  const [calendarIsOpen, setCalendarIsOpen] = useState(false);
  const hiddenInputRef = useRef<HTMLInputElement>();
  const onChangeRef = useRef(onChange);

  // eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
  const refCallback = (ref: HTMLInputElement): void => {
    hiddenInputRef.current = ref;
    if (!inputRef) return;

    // TODO: Fix correct types and remove disabled rules
    // eslint-disable-next-line
    // @ts-ignore
    if (isRefObject(inputRef)) {
      // eslint-disable-next-line
      // @ts-ignore
      // eslint-disable-next-line no-extra-semi
      (inputRef as Writeable<typeof inputRef>).current = ref;
    } else {
      // eslint-disable-next-line
      // @ts-ignore
      inputRef(ref);
    }
  };

  const updateHiddenValue = (
    date: string,
    hour: string,
    minute: string
  ): void => {
    if (hiddenInputRef.current === undefined) return;

    const value = `${date}T${hour}:${minute}`;
    hiddenInputRef.current.value = value;
  };

  const onChangeDate = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      updateHiddenValue(e.target.value, hourValue, minuteValue);
      hiddenInputRef.current && fireEvent("input", hiddenInputRef.current);
    },
    [hourValue, minuteValue]
  );

  const onSelectDate = (date: Date) => {
    updateHiddenValue(format(date, "yyyy-MM-dd"), hourValue, minuteValue);
    hiddenInputRef.current && fireEvent("input", hiddenInputRef.current);
    hiddenInputRef.current && fireEvent("blur", hiddenInputRef.current);
    setCalendarIsOpen(false);
  };

  // eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
  const handleChangeHour = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setHourValue(e.target.value);
    updateHiddenValue(dateValue, e.target.value, minuteValue);
    hiddenInputRef.current && fireEvent("input", hiddenInputRef.current);
  };

  // eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
  const handleChangeMinute = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMinuteValue(e.target.value);
    updateHiddenValue(dateValue, hourValue, e.target.value);
    hiddenInputRef.current && fireEvent("input", hiddenInputRef.current);
  };
  // eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
  const handleBlurTime = () => {
    hiddenInputRef.current && fireEvent("blur", hiddenInputRef.current);
  };

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
        const [h, m] = time.split(":");
        setDateValue(date);
        setHourValue(h);
        setMinuteValue(m);

        if (value !== this._value) {
          this._value = value;
          onChangeRef.current(value);
        }
      },
    });

    // Set initial values
    const { value } = hiddenInputRef.current;
    const [date, time] = value.split("T");
    const [h, m] = time.split(":");
    setDateValue(date);
    setHourValue(h);
    setMinuteValue(m);
  }, []);

  // eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
  const openCalendar = () => setCalendarIsOpen(true);

  // eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
  const closeCalendar = () => setCalendarIsOpen(false);

  /**
   * Defined the calendar component to render. This way we don't have to describe the component twice since it is rendered conditionally.
   */
  const Component = () => (
    <Calendar
      month={month}
      value={new Date(dateValue)}
      onChangeMonth={setMonth}
      onSelectDate={onSelectDate}
    />
  );

  return (
    <StyledDatePicker className={className}>
      <Label>{label}</Label>
      <InputWrapper>
        <TextInput
          disabled={disabled}
          status={status}
          value={dateValue}
          onBlur={handleBlur}
          onChange={onChangeDate}
          onClick={openCalendar}
          // Allow disable possibility to write in the input field
        />
        <TimeWrapper>
          <StyledSelect
            aria-label="hour"
            disabled={disabled}
            value={hourValue}
            onBlur={handleBlurTime}
            onChange={handleChangeHour}
          >
            {hours.map((h) => (
              <option key={h} value={h}>
                {h}
              </option>
            ))}
          </StyledSelect>
          :
          <StyledSelect
            aria-label="minute"
            disabled={disabled}
            value={minuteValue}
            onBlur={handleBlurTime}
            onChange={handleChangeMinute}
          >
            {MINUTES.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </StyledSelect>
        </TimeWrapper>
      </InputWrapper>

      {openInDialog ? (
        <StyledDialogBox
          hasBackdrop={true}
          header="Select date" // FIXME: add translation
          inPortal={true}
          show={calendarIsOpen}
          showCloseButton={true}
          onClose={closeCalendar}
        >
          <Component />
        </StyledDialogBox>
      ) : (
        calendarIsOpen && <Component />
      )}

      <input ref={refCallback} name={name} type="hidden" />
    </StyledDatePicker>
  );
};

DatePicker.defaultTheme = datePickerTheme;
