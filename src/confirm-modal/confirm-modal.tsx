import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { DialogBox } from "../dialogbox";
import { Button } from "../inputs/button";
import _ from "lodash";
import { StyledDialogBox } from "./confirm-modal.styles";

type TAnswer<T> = { text: string; value: T };
type TContext = { [key: string]: string | number };
type TUseConfirmation<T> = [(context?: TContext) => Promise<T>, JSX.Element];

interface IConfirmModalProps<TValue> {
  message: string;
  onResult: (value: TValue) => void;
  buttons: TAnswer<TValue>[];
  show: boolean;
}

const ConfirmModal = <T extends Record<string, never>>(
  props: IConfirmModalProps<T>
): JSX.Element => {
  function onClick(answer: TAnswer<T>) {
    props.onResult.bind(null, answer.value);
    return undefined;
  }

  return (
    <StyledDialogBox show={props.show} showCloseButton={false}>
      {props.message}
      <DialogBox.Footer>
        {props.buttons.map((answer, index) => (
          <Button key={index} onClick={onClick(answer)}>
            {answer.text}
          </Button>
        ))}
      </DialogBox.Footer>
    </StyledDialogBox>
  );
};

/**
 * useConfirmation can be used to show a confirmation dialog box
 * @param info - Info text to show
 * @param buttons - buttons, array: [{text: string, value: TValue}, ...]
 * @param resultCallback - Callback to be called on result
 *
 * @returns an array with [showFn: () => Promise<TValue>, component],
 * where showFn is a function to be called to show the dialog box. It returns a
 * promise that resolves to the result value.
 * component is a component that must be rendered somewhere
 */
export const useConfirmation = <T extends Record<string, never>>(
  info: string,
  buttons: TAnswer<T>[],
  resultCallback?: (value: T) => void
): TUseConfirmation<T> => {
  const [template, setTemplate] = useState(info);
  const [context, setContext] = useState<TContext | undefined>();
  const [showDialog, setShowDialog] = useState(false);
  const resolverRef = useRef<((value: T) => void) | null>(null);
  const callbackRef = useRef<((value: T) => void) | null>(null);

  const message = useMemo(() => {
    const compiled = _.template(template);
    try {
      return compiled(context);
    } catch {
      return "invalid-template";
    }
  }, [template, context]);

  // Update message if modified
  useEffect(() => {
    setTemplate(info);
  }, [info]);

  // Update callback if modified
  useEffect(() => {
    callbackRef.current = resultCallback || null;
  }, [resultCallback]);

  const handleResult = useCallback((result: T) => {
    setShowDialog(false);
    if (callbackRef.current) callbackRef.current(result);
    if (resolverRef.current) resolverRef.current(result);
  }, []);

  const showConfirmation = (context?: TContext): Promise<T> => {
    const promise = new Promise<T>((resolve) => {
      resolverRef.current = resolve;
      setContext(context);
      setShowDialog(true);
    });
    return promise;
  };

  const component = (
    <ConfirmModal
      buttons={buttons}
      message={message}
      show={showDialog}
      onResult={handleResult}
    />
  );
  return [showConfirmation, component];
};
