import React, { useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import FocusTrap from "focus-trap-react";

import { dialogBoxTheme } from "./dialogbox.theme";

/* Import components here */
import {
  Body,
  Close,
  CloseIcon,
  Footer,
  Header,
  StyledCloseButton,
  StyledDialogBox,
  Overlay as StyledOverlay,
  TopSection,
} from "./dialogbox.styles";

/* Import interfaces here */
import { DialogBoxProps, FooterProps } from "./dialogbox.interfaces";

/* Import utilities here */

const CloseButton = ({ onClick }: { onClick: () => void }): JSX.Element => (
  <StyledCloseButton
    aria-labelledby="close-modal"
    className="c-modal__close"
    onClick={onClick}
  >
    <Close className="u-hide-visually" id="close-modal">
      Close
    </Close>
    <CloseIcon viewBox="0 0 40 40">
      <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
    </CloseIcon>
  </StyledCloseButton>
);

/**
 *
 * Overlay is used as an clickable overlay
 */
const Overlay = (props: {
  className?: string;
  onClick: () => void;
  children: React.ReactChild | React.ReactChild[];
}): JSX.Element => {
  const { className, children /*onClick*/ } = props;
  const ref = useRef<HTMLDivElement>(null);
  const clickStatusRef = useRef(false);

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === ref.current) {
      clickStatusRef.current = true;
    }
  }, []);

  const handleMouseUp = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    try {
      if (e.target === ref.current && clickStatusRef.current) {
        // TODO: Fix correct clickAway
        // onClick()
      }
    } finally {
      clickStatusRef.current = false;
    }
  }, []);

  return (
    <StyledOverlay
      ref={ref}
      className={className}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {children}
    </StyledOverlay>
  );
};

const focusTrapOptions = { clickOutsideDeactivates: false };
export const DialogBox = ({
  className,
  children,
  hasBackdrop = true,
  onClose,
  show: showProp,
  showCloseButton = true,
  header,
  footer,
  inPortal: inPortalProp = true,
}: DialogBoxProps): JSX.Element | React.ReactPortal | null => {
  const show = showProp === undefined ? true : showProp;
  const inPortal = inPortalProp === undefined ? true : inPortalProp;

  const handleClose = useCallback(() => {
    if (onClose) onClose();
  }, [onClose]);

  const innerDialog = (
    <FocusTrap focusTrapOptions={focusTrapOptions}>
      <StyledDialogBox className={className}>
        <TopSection>
          {showCloseButton && <CloseButton onClick={handleClose} />}
          {header && <Header>{header}</Header>}
        </TopSection>
        <Body>{children}</Body>
        {footer}
      </StyledDialogBox>
    </FocusTrap>
  );

  const outerDialog = <Overlay onClick={handleClose}>{innerDialog}</Overlay>;

  const dialog = hasBackdrop ? outerDialog : innerDialog;

  if (show) {
    return inPortal ? createPortal(dialog, document.body) : dialog;
  }

  return null;
};

const DialogFooter = ({
  children,
  justify: justifyProp,
}: FooterProps): JSX.Element => {
  // Let justify default on "evenly" if there is only one child
  const justify =
    React.Children.count(children) === 1
      ? justifyProp || "evenly"
      : justifyProp;
  return <Footer justify={justify}>{children}</Footer>;
};

DialogBox.Footer = DialogFooter;
DialogBox.defaultTheme = dialogBoxTheme;
