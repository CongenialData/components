import React from "react";
import _ from "lodash";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { multiSelectTheme } from "./multiselect.theme";

/* Import components here */
import {
  AddChip,
  StyledChip as Chip,
  Display,
  HiddenSelect,
  StyledDialogBox,
  StyledMultiSelect,
} from "./multiselect.styles";
import { Button } from "../button";
import { List } from "../../list";

/* Import interfaces here */
import { MultiSelectProps } from "./multiselect.interfaces";
import { useConfirmation } from "../../confirm-modal";
import { Writeable, isRefObject } from "../../utils";

/* Import utilities here */

// Noop, handler when selecting a value directly in Select, to prevent React error
const noop = (): void => undefined;

/**
 * Multiselect input widget, renders selected values as chips
 */
export const MultiSelect = (props: MultiSelectProps<string>): JSX.Element => {
  const {
    name,
    showAddButtonWhenDisabled = false,
    disabled = false,
    addButtonText = "",
    options,
    inputRef,
  } = props;
  const selectRef = useRef<HTMLSelectElement>();
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [show, setShow] = useState(false);

  const [confirmRemove, ConfirmRemoveDialog] = useConfirmation(
    `Do you want to remove ${name}?`,
    [
      // TODO: Fix types
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      { text: "No", value: false },
      // TODO: Fix types
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      { text: "Yes", value: true },
    ]
  );

  // Initialize values
  useEffect(() => {
    if (selectRef.current === undefined) return;
    const options = Array.from(selectRef.current.options);
    const values = _.reduce<HTMLOptionElement, string[]>(
      options,
      (acc, cur) => (cur.selected ? [...acc, cur.value] : acc),
      []
    );
    setSelectedValues(values);
  }, [options]);

  const labelMap: Record<string, never> = _.reduce(
    options,
    (acc, cur) => ({ ...acc, [cur.value]: cur.label }),
    {}
  );

  const isChecked = useMemo(() => {
    const valueMap: { [key: string]: true } = _.reduce(
      selectedValues,
      (acc, cur) => ({ ...acc, [cur]: true }),
      {}
    );
    return (key: string): boolean => valueMap[key] || false;
  }, [selectedValues]);

  const fireChangeEvent = useCallback((): void => {
    setTimeout(() => {
      const change = new Event("input", { bubbles: true, cancelable: true });
      const blur = new Event("blur", { bubbles: true, cancelable: true });
      selectRef.current?.dispatchEvent(change);
      selectRef.current?.dispatchEvent(blur);
    }, 0);
  }, []);

  /**
   * setValue marks the value as selected
   */
  const setValue = useCallback(
    (value: string) => {
      const values = _.uniq([...selectedValues, value]);
      setSelectedValues(values);
      fireChangeEvent();
    },
    [fireChangeEvent, selectedValues]
  );

  /**
   * resetValue deselectes the value
   */
  const resetValue = useCallback(
    (value: string) => {
      const values = _.filter(selectedValues, (v) => v !== value);
      setSelectedValues(values);
      fireChangeEvent();
    },
    [fireChangeEvent, selectedValues]
  );

  const handleClickCheck = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.dataset.val || "";
    if (e.target.checked) {
      setValue(value);
    } else {
      resetValue(value);
    }
  };

  const refCallback = useCallback(
    (ref: HTMLSelectElement): void => {
      selectRef.current = ref;

      // Handle inputRef
      if (inputRef === undefined) return;
      // TODO: Fix correct types and remove disabled rules
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (isRefObject(inputRef)) {
        // TODO: Fix correct types and remove disabled rules
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line no-extra-semi
        (inputRef as Writeable<typeof inputRef>).current = ref;
      } else {
        // TODO: Fix correct types and remove disabled rules
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        inputRef(ref);
      }
    },
    [inputRef]
  );

  // Handles show/hide of selection box
  const handleClick = useCallback((): void => {
    setShow(true);
  }, []);

  const handleClose = useCallback((): void => {
    setShow(false);
  }, []);

  const handleClickChip = async (value: string): Promise<void> => {
    if (await confirmRemove({ name: labelMap[value] })) resetValue(value);
  };

  return (
    <StyledMultiSelect>
      <Display>
        {selectedValues.map((v) => (
          <Chip
            key={v}
            disabled={disabled}
            showRemove={!disabled}
            text={labelMap[v]}
            // eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
            onClick={handleClickChip.bind(null, v)}
          />
        ))}
        {!disabled || (disabled && showAddButtonWhenDisabled) ? (
          <AddChip
            disabled={disabled}
            icon={faEdit}
            text={addButtonText}
            onClick={handleClick}
          />
        ) : null}
      </Display>
      <HiddenSelect
        ref={refCallback}
        multiple
        disabled={disabled}
        name={name}
        value={selectedValues}
        onChange={noop}
      >
        {options.map(({ value, label }, i) => (
          <option key={i} value={value}>
            {label}
          </option>
        ))}
      </HiddenSelect>
      <StyledDialogBox
        header="Available workers"
        show={show}
        showCloseButton={false}
        onClose={handleClose}
      >
        <List>
          {options.map(({ value, label }, i) => (
            <List.Item key={i}>
              <List.Item.Description>
                <label>
                  <input
                    checked={isChecked(value)}
                    data-val={value}
                    type="checkbox"
                    onChange={handleClickCheck}
                  />
                  {label}
                </label>
              </List.Item.Description>
            </List.Item>
          ))}
        </List>
        <StyledDialogBox.Footer justify="right">
          <Button status="primary" onClick={handleClose}>
            Ok
          </Button>
        </StyledDialogBox.Footer>
      </StyledDialogBox>
      {ConfirmRemoveDialog}
    </StyledMultiSelect>
  );
};

MultiSelect.defaultTheme = multiSelectTheme;
