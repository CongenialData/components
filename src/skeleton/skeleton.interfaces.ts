export interface SkeletonStyleProps {
  /**
   * Adjusts the height of the skeleton.
   *
   * Defaults to value defined in theme.
   *
   * A custom value like `100px`, `2rem` or `33%` is also valid.
   */
  height?: "small" | "medium" | "large" | string;

  /**
   * Make skeleton translucent
   *
   * Defaults to `false`
   */
  translucent?: boolean;

  /**
   * Adjusts the width of the skeleton.
   *
   * Defaults to medium.
   *
   * A custom value like `100px`, `2rem` or `33%` is also valid.
   */
  width?: "small" | "medium" | "wide" | "full" | string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SkeletonComponentProps {}

export interface SkeletonProps
  extends SkeletonStyleProps,
    SkeletonComponentProps {}
