import styled from "styled-components/macro";

import { FlexProps } from "./flex.interfaces";

export const StyledFlex = styled.div<FlexProps>`
  display: ${({ container }) => (container ? "flex" : "block")};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  flex-grow: ${({ flexGrow }) => flexGrow || 0};
  flex-basis: ${({ flexBasis }) => flexBasis || "auto"};
  flex-shrink: ${({ flexShrink }) => flexShrink || 1};
  flex-wrap: ${({ flexWrap }) => flexWrap || "nowrap"};
  flex: ${({ flex }) => flex || "0 1 auto"};
  align-items: ${({ alignItems }) => alignItems || "stretch"};
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  max-width: ${({ maxWidth }) => maxWidth || "none"};
`;
