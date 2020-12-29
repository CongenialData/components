import React, { PropsWithChildren } from "react";

/* Import components here */
import { Heading } from "../typography/heading";
import { Body, Header, StyledFormSection } from "./form-section.styles";

/* Import interfaces here */
import { FormSectionProps } from "./form-section.interfaces";
import { formSectionTheme } from "./form-section.theme";

export const FormSection = ({
  border = false,
  icon,
  title,
  children,
  className,
}: PropsWithChildren<FormSectionProps>): JSX.Element => {
  return (
    <StyledFormSection border={border} className={className}>
      {(icon || title) && (
        <Header>
          {icon && icon}
          {title && <Heading>{title}</Heading>}
        </Header>
      )}
      <Body>{children}</Body>
    </StyledFormSection>
  );
};

FormSection.defaultTheme = formSectionTheme;
