import React from "react";

/* Import components here */
import { SkeletonLine } from "./skeleton.styles";

/* Import interfaces here */
import { SkeletonProps } from "./skeleton.interfaces";
import { skeletonTheme } from "./skeleton.theme";

/* Import utilities here */

export const Skeleton = ({
  height,
  translucent = false,
  width = "medium",
}: SkeletonProps): JSX.Element => {
  return (
    <SkeletonLine height={height} translucent={translucent} width={width} />
  );
};

Skeleton.defaultTheme = skeletonTheme;
