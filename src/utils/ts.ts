import { Tuple } from "ts-essentials";
export const tuple = <T extends Tuple>(t: T): T => t;

// remove readonly modifier on type
export type Writeable<T> = { -readonly [P in keyof T]: T[P] };

// typeguard to differentiate between a RefObject or a callbackRef
export const isRefObject = <T extends Record<string, never>>(
  obj: React.Ref<T>
): obj is React.RefObject<T> =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (obj as any).current !== undefined;

export type FlowReturn<TNext, TReturn = void> = Generator<
  Promise<TNext>,
  TReturn,
  TNext
>;
