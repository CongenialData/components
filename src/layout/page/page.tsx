import React, { memo } from "react";

import { NavItem } from "../../navbar/navitem";
import { NavBar } from "../../navbar/navbar";
import { Toolbar } from "../toolbar";
import { ThemedComponent } from "../../theming";

import {
  PageBody,
  PageContainer,
  PageContentWrapper,
  StyledPage,
} from "./page.styles";
import { pageTheme } from "./page.theme";
import { PageProps } from "./page.interfaces";

export const Page: React.FC<PageProps> & ThemedComponent = memo(
  ({
    disableToolbar = false,
    disableMenu = false,
    navItems,
    title,
    primaryControlsComponent,
    secondaryControlsComponent,
    sidebar,
    children,
    ...props
  }: PageProps): JSX.Element => {
    return (
      <StyledPage>
        <PageContainer>
          {disableToolbar || (
            <Toolbar
              primaryControlsComponent={primaryControlsComponent}
              secondaryControlsComponent={secondaryControlsComponent}
              title={title}
            />
          )}
          <PageBody>
            {disableMenu || (
              <NavBar>
                <>
                  {navItems && navItems.map(item => <NavItem key={item.label} icon={item.icon} label={item.label} to={item.to} />)}
                </>
              </NavBar>
            )}
            <PageContentWrapper {...props}>{children}</PageContentWrapper>
            {sidebar}
          </PageBody>
        </PageContainer>
      </StyledPage>
    );
  }
);

Page.defaultTheme = pageTheme;
Page.displayName = "Page";
