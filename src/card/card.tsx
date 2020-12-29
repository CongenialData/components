import * as React from "react";

/* Import components here */
import { Content, Footer, Header, StyledCard, Title } from "./card.styles";

/* Import interfaces here */
import { CardProps } from "./card.interfaces";
import { cardTheme } from "./card.theme";

/** A much reusable card for any type of card-based interface */
export const Card = ({
  accent,
  children,
  footer,
  title,
  shadow = false,
  size,
  renderToolbar,
  spacing = "normal",
  status = "basic",
}: CardProps): JSX.Element => {
  return (
    <StyledCard shadow={shadow} size={size} spacing={spacing} status={status}>
      {(title || renderToolbar) && (
        <Header accent={accent} spacing={spacing} status={status}>
          <Title status={status}>{title}</Title>
          {renderToolbar !== undefined && <div>{renderToolbar()}</div>}
        </Header>
      )}
      <Content spacing={spacing}>{children}</Content>
      {footer && <Footer spacing={spacing}>{footer}</Footer>}
    </StyledCard>
  );
};

Card.defaultTheme = cardTheme;
