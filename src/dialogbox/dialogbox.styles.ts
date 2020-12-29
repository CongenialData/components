import styled from "styled-components/macro";

import { justify as JUSTIFY, Justify } from "./dialogbox.interfaces";

export const StyledDialogBox = styled.div`
  position: fixed;

  width: 100%;
  height: 100%;
  max-height: calc(100% - 1em);

  padding: 0;
  left: 50%;
  top: 50%;
  height: auto;
  transform: translate(-50%, -50%);

  border-radius: ${({ theme }): string => theme.DialogBox.borderRadius};

  background-color: #ffffff;
  color: ${({ theme }) => theme.DialogBox.color};

  box-shadow: ${({ theme }) => theme.support.SHADOW};
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  @media (min-width: ${({ theme }): string => theme.breakpoints.mdContainer}) {
    width: 34rem;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.DialogBox.overlayColor};
  z-index: 2;
`;

export const TopSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: flex-start;
`;

export const StyledCloseButton = styled.button`
  padding: 0.5em;
  line-height: 1;
  background: #f6f6f7;
  border: 0;
  box-shadow: none;
  outline-style: none;
  cursor: pointer;
`;

export const CloseIcon = styled.svg`
  width: 25px;
  height: 25px;
  fill: transparent;
  stroke: black;
  stroke-linecap: round;
  stroke-width: 2;
`;

export const Close = styled.span`
  border: 0 !important;
  clip: rect(0 0 0 0) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
`;

export const Header = styled.h1`
  margin: 0;
  padding: 1rem;
  padding-bottom: 0;

  font-weight: 600;
  font-size: 1.25rem;
`;

export const Body = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;

  margin-top: 1rem;
  padding: 0 1rem;
  padding-bottom: 1rem;
`;

// flexMap is used in Footer to justify the content according to TJustify
const flexMap = (x?: Justify) =>
  x
    ? {
        [JUSTIFY.left]: "flex-start",
        [JUSTIFY.right]: "flex-end",
        [JUSTIFY.evenly]: "space-around",
      }[x]
    : "space-between";

export const Footer = styled.div<{ justify?: Justify }>`
  display: flex;
  justify-content: ${({ justify }) => flexMap(justify)};
  flex-direction: row;
  margin-top: 1rem;
`;
