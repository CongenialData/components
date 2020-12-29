import _ from "lodash";
import { DeepPartial, Tuple } from "ts-essentials";
import { DefaultTheme } from "styled-components/macro";

import { BASE_COLORS } from "./basecolors";
import { TColors, colorMapping } from "./colors";
import { BASE_TYPOGRAPHY } from "./typography";
import { TSupport, supportMapping } from "./support";
import { breakpoints } from "./breakpoints";
import { spacing } from "./spacing";

const COMMON_THEME_DECLARATIONS = {
  baseColors: BASE_COLORS,
  breakpoints,
  spacing,
  typography: BASE_TYPOGRAPHY,
};

export type TCommonTheme = typeof COMMON_THEME_DECLARATIONS & {
  colors: TColors;
  support: TSupport;
};

export const tuple = <T extends Tuple>(t: T): T => {
  return t;
};
type TTheme = {
  [key: string]: TThemeValue;
};
type TThemeValue = string | number | TTheme;

type TComponentTheme = [string, TTheme]; // [<namespace>, <theme>]
type TComponentThemeFn = (theme: TCommonTheme) => TComponentTheme;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TThemeFromFn<T extends TComponentThemeFn> = T extends (
  ...args: any
) => [any, infer TT]
  ? TT
  : never;

export interface ThemedComponent {
  defaultTheme?: TComponentThemeFn;
}

// TODO: Fix correct types
// eslint-disable-next-line
export const isThemedComponent = (obj: any): obj is ThemedComponent =>
  obj && obj.defaultTheme;

/**
 * createTheme creates a theme for all given components. All components imported
 * must be included here.
 *
 * @remarks
 * Components "should" use the component name as namespace for it's theme
 *
 * Code sample:
 *
 * ```ts
 * const theme = createTheme([Button, Card], {
 *   colors: { primary: 'blue', secondary: 'red', accent: 'green'},
 *   Button: { background: 'green' },
 *   Card: { color: 'red' }
 * })
 * ```
 *
 * @param components - List with themed components or theme functions to include in theme
 * @param baseTheme - Override the theme with this
 */
export const createTheme = (
  components: (ThemedComponent | TComponentThemeFn)[],
  baseTheme: DeepPartial<DefaultTheme> = {}
): DefaultTheme => {
  const partialBase = _.merge(
    {
      ...COMMON_THEME_DECLARATIONS,
    },
    baseTheme
  );

  const colors = colorMapping(partialBase.baseColors);
  const support = supportMapping(partialBase.baseColors, colors);

  const base = _.merge(partialBase, {
    colors,
    support,
  });

  const theme: DeepPartial<DefaultTheme> = _.reduce(
    components,
    (acc, component) => {
      // Either expect a themed component or a theme function
      let themeFn: TComponentThemeFn;
      if (isThemedComponent(component)) {
        if (component.defaultTheme === undefined)
          throw new Error(`createTheme: Component must have a theme`);
        themeFn = component.defaultTheme;
      } else {
        themeFn = component;
      }

      const [ns, t] = themeFn(acc);
      return {
        ...acc,
        [ns]: t,
      };
    },
    base
  );

  return _.merge(theme, baseTheme) as DefaultTheme;
};
