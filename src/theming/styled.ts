import { IThemedComponent } from './theming';
import { TSpacing } from './spacing';
import { TBreakpoints } from './breakpoints';
import { TBaseColors } from './basecolors';
import { TColors } from './colors';
import { TSupport } from './support';
import { TBaseTypography } from './typography';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/interface-name-prefix
  export interface DefaultTheme {
    baseColors: TBaseColors;
    breakpoints: TBreakpoints;
    colors: TColors;
    spacing: TSpacing;
    support: TSupport;
    typography: TBaseTypography;
  }
}

declare module 'React' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/interface-name-prefix
  interface FunctionComponent extends Partial<IThemedComponent> {}
}

export type TControlStatus = 'control';

export type TDefaultStatuses =
  | 'basic'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info';

export type TComponentStatus = TControlStatus | TDefaultStatuses;

export type TComponentType = 'default' | 'alternate';

export type TComponentSize = 'tiny' | 'small' | 'medium' | 'large' | 'giant';

export type TComponentShape = 'rectangle' | 'semiround' | 'round';
