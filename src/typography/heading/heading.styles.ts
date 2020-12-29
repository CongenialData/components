import styled, {
  FlattenSimpleInterpolation,
  css,
} from "styled-components/macro";

import { StyledHeadingProps } from "./heading.interfaces";

type ConditionalStyle<T> =
  | FlattenSimpleInterpolation
  | string
  | undefined
  | false
  | T;

const truncateStyle = (): FlattenSimpleInterpolation => css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledHeading = styled.h1.attrs({ role: "heading" })<
  StyledHeadingProps
>`
  align-self: ${({ alignSelf }): string => alignSelf || "auto"};

  color: ${({ color, theme }): string => color || theme.Heading.color};

  font-size: ${({ level, theme }): string => theme.Heading.fontSize[level]};
  font-weight: ${({ level, theme }): number => theme.Heading.fontWeight[level]};
  line-height: ${({ level, theme }): string => theme.Heading.lineHeight[level]};
  font-family: ${({ level, theme }): string => theme.Heading.fontFamily[level]};

  text-align: ${({ textAlign }): string => textAlign};

  ${({ truncate }): ConditionalStyle<typeof truncateStyle> =>
    truncate && truncateStyle()}
`;
