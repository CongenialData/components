import styled, {
  FlattenSimpleInterpolation,
  css,
} from "styled-components/macro";

import {
  StyledParagraphOptionalProps,
  StyledParagraphRequiredProps,
} from "./paragraph.interfaces";

type TConditionalStyle<T> =
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

export const StyledParagraph = styled.p<
  StyledParagraphRequiredProps & StyledParagraphOptionalProps
>`
  align-self: ${({ alignSelf }): string => alignSelf || "auto"};

  color: ${({ color, theme, variant }): string =>
    color || theme.Paragraph.variant[variant].color};

  font-size: ${({ theme, variant }): string =>
    theme.Paragraph.variant[variant].fontSize};
  font-weight: ${({ theme, variant }): number =>
    theme.Paragraph.variant[variant].fontWeight};
  line-height: ${({ theme, variant }): string =>
    theme.Paragraph.variant[variant].lineHeight};
  font-family: ${({ theme, variant }): string =>
    theme.Paragraph.variant[variant].fontFamily};

  text-align: ${({ textAlign }): string => textAlign};

  ${({ truncate }): TConditionalStyle<typeof truncateStyle> =>
    truncate && truncateStyle()}
`;
