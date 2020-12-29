import styled, { keyframes } from "styled-components/macro";

import { Page } from "../layout/page";

export const Rotate = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const StyledPage = styled(Page)`
  position: fixed;
  width: 100vw;
  height: 100vw;
  z-index: 1000; /* Above everything (hopefully) */
  padding: 0;
`;

export const AnimatedWrapper = styled.div`
  animation: ${FadeIn} 0.5s linear;
  height: 100%;
  flex: 0 1 auto;
  display: flex;
`;

export const Loader = styled.div`
  height: 48px;
  width: 48px;
  color: rgba(90, 90, 90, 0.2);
  position: relative;
  display: inline-block;
  border: 5px solid;
  border-radius: 50%;
  border-right-color: #5a5a5a;
  animation: ${Rotate} 1s linear infinite;
`;
