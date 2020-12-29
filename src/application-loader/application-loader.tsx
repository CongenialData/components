import React, { useEffect, useRef, useState } from "react";

import { Flex } from "../flex";
import { Heading } from "../typography/heading";

import {
  AnimatedWrapper,
  Loader,
  StyledPage,
} from "./application-loader.styles";
import { ApplicationLoaderProps } from "./application-loader.types";

export const ApplicationLoader = ({
  show = true,
  hideDelay = 500,
  text
}: ApplicationLoaderProps): JSX.Element | null => {
  const timeoutRef = useRef<null>();
  const [hide, setHide] = useState(show);

  // Let the loader show a little longer than nessecary, to prevent flickering
  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (show === false) {
      setTimeout(() => {
        setHide(true);
      }, hideDelay);
    } else {
      setHide(false);
    }
  }, [hideDelay, show]);

  if (hide) {
    return null;
  }

  return (
    <StyledPage disableMenu={true} disableToolbar={true}>
      <AnimatedWrapper>
        <Flex
          alignItems="center"
          container={true}
          flexDirection="column"
          height="100vh"
          justifyContent="center"
          width="100vw"
        >
          {text && <Heading>{text}</Heading>}
          <Loader />
        </Flex>
      </AnimatedWrapper>
    </StyledPage>
  );
};
