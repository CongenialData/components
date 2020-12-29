import * as React from "react";

import { StyledFlex } from "./flex.styles";
import { FlexProps } from "./flex.interfaces";

export const Flex = (props: FlexProps): JSX.Element => {
  return (
    <StyledFlex
      alignItems={props.alignItems}
      className={props.className}
      container={props.container}
      flex={props.flex}
      flexBasis={props.flexBasis}
      flexDirection={props.flexDirection}
      flexGrow={props.flexGrow}
      flexShrink={props.flexShrink}
      flexWrap={props.flexWrap}
      height={props.height}
      justifyContent={props.justifyContent}
      margin={props.margin}
      maxWidth={props.maxWidth}
      padding={props.padding}
      width={props.width}
    >
      {props.children || ""}
    </StyledFlex>
  );
};
