// The contents of this file is based on https://github.com/akveo/nebular/blob/master/src/framework/theme/styles/themes/_default.scss

import { TBaseColors } from './basecolors'

/**
 * A function that maps theme variables into Component variables
 * A theme consists of a list of colors, backgrounds, borders, text styles and supporting variables.
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const colorMapping = (baseColors: TBaseColors) => {
  /**
   * Status colors states - focus, hover, default, active, disabled
   */
  //#region
  const COLOR_BASIC_FOCUS = baseColors.COLOR_BASIC_400
  const COLOR_BASIC_HOVER = baseColors.COLOR_BASIC_200
  const COLOR_BASIC_DEFAULT = baseColors.COLOR_BASIC_300
  const COLOR_BASIC_ACTIVE = baseColors.COLOR_BASIC_400
  const COLOR_BASIC_DISABLED = baseColors.COLOR_BASIC_TRANSPARENT_300
  const COLOR_BASIC_FOCUS_BORDER = baseColors.COLOR_BASIC_500
  const COLOR_BASIC_HOVER_BORDER = COLOR_BASIC_HOVER
  const COLOR_BASIC_DEFAULT_BORDER = COLOR_BASIC_DEFAULT
  const COLOR_BASIC_ACTIVE_BORDER = COLOR_BASIC_ACTIVE
  const COLOR_BASIC_DISABLED_BORDER = COLOR_BASIC_DISABLED

  const COLOR_BASIC_TRANSPARENT_FOCUS = baseColors.COLOR_BASIC_TRANSPARENT_300
  const COLOR_BASIC_TRANSPARENT_HOVER = baseColors.COLOR_BASIC_TRANSPARENT_200
  const COLOR_BASIC_TRANSPARENT_DEFAULT = baseColors.COLOR_BASIC_TRANSPARENT_100
  const COLOR_BASIC_TRANSPARENT_ACTIVE = baseColors.COLOR_BASIC_TRANSPARENT_300
  const COLOR_BASIC_TRANSPARENT_DISABLED = baseColors.COLOR_BASIC_TRANSPARENT_200
  const COLOR_BASIC_TRANSPARENT_FOCUS_BORDER = baseColors.COLOR_BASIC_600
  const COLOR_BASIC_TRANSPARENT_HOVER_BORDER = baseColors.COLOR_BASIC_600
  const COLOR_BASIC_TRANSPARENT_DEFAULT_BORDER = baseColors.COLOR_BASIC_600
  const COLOR_BASIC_TRANSPARENT_ACTIVE_BORDER = baseColors.COLOR_BASIC_600
  const COLOR_BASIC_TRANSPARENT_DISABLED_BORDER = baseColors.COLOR_BASIC_TRANSPARENT_300

  const COLOR_PRIMARY_FOCUS = baseColors.COLOR_PRIMARY_600
  const COLOR_PRIMARY_HOVER = baseColors.COLOR_PRIMARY_400
  const COLOR_PRIMARY_DEFAULT = baseColors.COLOR_PRIMARY_500
  const COLOR_PRIMARY_ACTIVE = baseColors.COLOR_PRIMARY_600
  const COLOR_PRIMARY_DISABLED = baseColors.COLOR_BASIC_TRANSPARENT_300
  const COLOR_PRIMARY_FOCUS_BORDER = baseColors.COLOR_PRIMARY_700
  const COLOR_PRIMARY_HOVER_BORDER = COLOR_PRIMARY_HOVER
  const COLOR_PRIMARY_DEFAULT_BORDER = COLOR_PRIMARY_DEFAULT
  const COLOR_PRIMARY_ACTIVE_BORDER = COLOR_PRIMARY_ACTIVE
  const COLOR_PRIMARY_DISABLED_BORDER = COLOR_PRIMARY_DISABLED

  const COLOR_PRIMARY_TRANSPARENT_FOCUS = baseColors.COLOR_PRIMARY_TRANSPARENT_300
  const COLOR_PRIMARY_TRANSPARENT_HOVER = baseColors.COLOR_PRIMARY_TRANSPARENT_200
  const COLOR_PRIMARY_TRANSPARENT_DEFAULT = baseColors.COLOR_PRIMARY_TRANSPARENT_100
  const COLOR_PRIMARY_TRANSPARENT_ACTIVE = baseColors.COLOR_PRIMARY_TRANSPARENT_300
  const COLOR_PRIMARY_TRANSPARENT_DISABLED = baseColors.COLOR_BASIC_TRANSPARENT_200
  const COLOR_PRIMARY_TRANSPARENT_FOCUS_BORDER = baseColors.COLOR_PRIMARY_500
  const COLOR_PRIMARY_TRANSPARENT_HOVER_BORDER = baseColors.COLOR_PRIMARY_500
  const COLOR_PRIMARY_TRANSPARENT_DEFAULT_BORDER = baseColors.COLOR_PRIMARY_500
  const COLOR_PRIMARY_TRANSPARENT_ACTIVE_BORDER = baseColors.COLOR_PRIMARY_500
  const COLOR_PRIMARY_TRANSPARENT_DISABLED_BORDER = baseColors.COLOR_BASIC_TRANSPARENT_300

  const COLOR_SUCCESS_FOCUS = baseColors.COLOR_SUCCESS_600
  const COLOR_SUCCESS_HOVER = baseColors.COLOR_SUCCESS_400
  const COLOR_SUCCESS_DEFAULT = baseColors.COLOR_SUCCESS_500
  const COLOR_SUCCESS_ACTIVE = baseColors.COLOR_SUCCESS_600
  const COLOR_SUCCESS_DISABLED = baseColors.COLOR_BASIC_TRANSPARENT_300
  const COLOR_SUCCESS_FOCUS_BORDER = baseColors.COLOR_SUCCESS_700
  const COLOR_SUCCESS_HOVER_BORDER = COLOR_SUCCESS_HOVER
  const COLOR_SUCCESS_DEFAULT_BORDER = COLOR_SUCCESS_DEFAULT
  const COLOR_SUCCESS_ACTIVE_BORDER = COLOR_SUCCESS_ACTIVE
  const COLOR_SUCCESS_DISABLED_BORDER = COLOR_SUCCESS_DISABLED

  const COLOR_SUCCESS_TRANSPARENT_FOCUS = baseColors.COLOR_SUCCESS_TRANSPARENT_300
  const COLOR_SUCCESS_TRANSPARENT_FOCUS_BORDER = baseColors.COLOR_SUCCESS_500
  const COLOR_SUCCESS_TRANSPARENT_HOVER = baseColors.COLOR_SUCCESS_TRANSPARENT_200
  const COLOR_SUCCESS_TRANSPARENT_HOVER_BORDER = baseColors.COLOR_SUCCESS_500
  const COLOR_SUCCESS_TRANSPARENT_DEFAULT = baseColors.COLOR_SUCCESS_TRANSPARENT_100
  const COLOR_SUCCESS_TRANSPARENT_DEFAULT_BORDER = baseColors.COLOR_SUCCESS_500
  const COLOR_SUCCESS_TRANSPARENT_ACTIVE = baseColors.COLOR_SUCCESS_TRANSPARENT_300
  const COLOR_SUCCESS_TRANSPARENT_ACTIVE_BORDER = baseColors.COLOR_SUCCESS_500
  const COLOR_SUCCESS_TRANSPARENT_DISABLED = baseColors.COLOR_BASIC_TRANSPARENT_200
  const COLOR_SUCCESS_TRANSPARENT_DISABLED_BORDER = baseColors.COLOR_BASIC_TRANSPARENT_300

  const COLOR_INFO_FOCUS = baseColors.COLOR_INFO_600
  const COLOR_INFO_HOVER = baseColors.COLOR_INFO_400
  const COLOR_INFO_DEFAULT = baseColors.COLOR_INFO_500
  const COLOR_INFO_ACTIVE = baseColors.COLOR_INFO_600
  const COLOR_INFO_DISABLED = baseColors.COLOR_BASIC_TRANSPARENT_300
  const COLOR_INFO_FOCUS_BORDER = baseColors.COLOR_INFO_700
  const COLOR_INFO_HOVER_BORDER = COLOR_INFO_HOVER
  const COLOR_INFO_DEFAULT_BORDER = COLOR_INFO_DEFAULT
  const COLOR_INFO_ACTIVE_BORDER = COLOR_INFO_ACTIVE
  const COLOR_INFO_DISABLED_BORDER = COLOR_INFO_DISABLED

  const COLOR_INFO_TRANSPARENT_FOCUS = baseColors.COLOR_INFO_TRANSPARENT_300
  const COLOR_INFO_TRANSPARENT_HOVER = baseColors.COLOR_INFO_TRANSPARENT_200
  const COLOR_INFO_TRANSPARENT_DEFAULT = baseColors.COLOR_INFO_TRANSPARENT_100
  const COLOR_INFO_TRANSPARENT_ACTIVE = baseColors.COLOR_INFO_TRANSPARENT_300
  const COLOR_INFO_TRANSPARENT_DISABLED = baseColors.COLOR_BASIC_TRANSPARENT_200
  const COLOR_INFO_TRANSPARENT_FOCUS_BORDER = baseColors.COLOR_INFO_500
  const COLOR_INFO_TRANSPARENT_HOVER_BORDER = baseColors.COLOR_INFO_500
  const COLOR_INFO_TRANSPARENT_DEFAULT_BORDER = baseColors.COLOR_INFO_500
  const COLOR_INFO_TRANSPARENT_ACTIVE_BORDER = baseColors.COLOR_INFO_500
  const COLOR_INFO_TRANSPARENT_DISABLED_BORDER = baseColors.COLOR_BASIC_TRANSPARENT_300

  const COLOR_WARNING_FOCUS = baseColors.COLOR_WARNING_600
  const COLOR_WARNING_HOVER = baseColors.COLOR_WARNING_400
  const COLOR_WARNING_DEFAULT = baseColors.COLOR_WARNING_500
  const COLOR_WARNING_ACTIVE = baseColors.COLOR_WARNING_600
  const COLOR_WARNING_DISABLED = baseColors.COLOR_BASIC_TRANSPARENT_300
  const COLOR_WARNING_FOCUS_BORDER = baseColors.COLOR_WARNING_700
  const COLOR_WARNING_HOVER_BORDER = COLOR_WARNING_HOVER
  const COLOR_WARNING_DEFAULT_BORDER = COLOR_WARNING_DEFAULT
  const COLOR_WARNING_ACTIVE_BORDER = COLOR_WARNING_ACTIVE
  const COLOR_WARNING_DISABLED_BORDER = COLOR_WARNING_DISABLED

  const COLOR_WARNING_TRANSPARENT_FOCUS = baseColors.COLOR_WARNING_TRANSPARENT_300
  const COLOR_WARNING_TRANSPARENT_HOVER = baseColors.COLOR_WARNING_TRANSPARENT_200
  const COLOR_WARNING_TRANSPARENT_DEFAULT = baseColors.COLOR_WARNING_TRANSPARENT_100
  const COLOR_WARNING_TRANSPARENT_ACTIVE = baseColors.COLOR_WARNING_TRANSPARENT_300
  const COLOR_WARNING_TRANSPARENT_DISABLED = baseColors.COLOR_BASIC_TRANSPARENT_200
  const COLOR_WARNING_TRANSPARENT_FOCUS_BORDER = baseColors.COLOR_WARNING_500
  const COLOR_WARNING_TRANSPARENT_HOVER_BORDER = baseColors.COLOR_WARNING_500
  const COLOR_WARNING_TRANSPARENT_DEFAULT_BORDER = baseColors.COLOR_WARNING_500
  const COLOR_WARNING_TRANSPARENT_ACTIVE_BORDER = baseColors.COLOR_WARNING_500
  const COLOR_WARNING_TRANSPARENT_DISABLED_BORDER = baseColors.COLOR_BASIC_TRANSPARENT_300

  const COLOR_DANGER_FOCUS = baseColors.COLOR_DANGER_600
  const COLOR_DANGER_HOVER = baseColors.COLOR_DANGER_400
  const COLOR_DANGER_DEFAULT = baseColors.COLOR_DANGER_500
  const COLOR_DANGER_ACTIVE = baseColors.COLOR_DANGER_600
  const COLOR_DANGER_DISABLED = baseColors.COLOR_BASIC_TRANSPARENT_300
  const COLOR_DANGER_FOCUS_BORDER = baseColors.COLOR_DANGER_700
  const COLOR_DANGER_HOVER_BORDER = COLOR_DANGER_HOVER
  const COLOR_DANGER_DEFAULT_BORDER = COLOR_DANGER_DEFAULT
  const COLOR_DANGER_ACTIVE_BORDER = COLOR_DANGER_ACTIVE
  const COLOR_DANGER_DISABLED_BORDER = COLOR_DANGER_DISABLED

  const COLOR_DANGER_TRANSPARENT_FOCUS = baseColors.COLOR_DANGER_TRANSPARENT_300
  const COLOR_DANGER_TRANSPARENT_HOVER = baseColors.COLOR_DANGER_TRANSPARENT_200
  const COLOR_DANGER_TRANSPARENT_DEFAULT = baseColors.COLOR_DANGER_TRANSPARENT_100
  const COLOR_DANGER_TRANSPARENT_ACTIVE = baseColors.COLOR_DANGER_TRANSPARENT_300
  const COLOR_DANGER_TRANSPARENT_DISABLED = baseColors.COLOR_BASIC_TRANSPARENT_200
  const COLOR_DANGER_TRANSPARENT_FOCUS_BORDER = baseColors.COLOR_DANGER_500
  const COLOR_DANGER_TRANSPARENT_HOVER_BORDER = baseColors.COLOR_DANGER_500
  const COLOR_DANGER_TRANSPARENT_DEFAULT_BORDER = baseColors.COLOR_DANGER_500
  const COLOR_DANGER_TRANSPARENT_ACTIVE_BORDER = baseColors.COLOR_DANGER_500
  const COLOR_DANGER_TRANSPARENT_DISABLED_BORDER = baseColors.COLOR_BASIC_TRANSPARENT_300

  const COLOR_CONTROL_FOCUS = baseColors.COLOR_BASIC_300
  const COLOR_CONTROL_HOVER = baseColors.COLOR_BASIC_200
  const COLOR_CONTROL_DEFAULT = baseColors.COLOR_BASIC_100
  const COLOR_CONTROL_ACTIVE = baseColors.COLOR_BASIC_300
  const COLOR_CONTROL_DISABLED = baseColors.COLOR_BASIC_TRANSPARENT_300
  const COLOR_CONTROL_FOCUS_BORDER = baseColors.COLOR_BASIC_500
  const COLOR_CONTROL_HOVER_BORDER = COLOR_CONTROL_HOVER
  const COLOR_CONTROL_DEFAULT_BORDER = COLOR_CONTROL_DEFAULT
  const COLOR_CONTROL_ACTIVE_BORDER = COLOR_CONTROL_ACTIVE
  const COLOR_CONTROL_DISABLED_BORDER = COLOR_CONTROL_DISABLED

  const COLOR_CONTROL_TRANSPARENT_FOCUS = baseColors.COLOR_BASIC_CONTROL_TRANSPARENT_300
  const COLOR_CONTROL_TRANSPARENT_HOVER = baseColors.COLOR_BASIC_CONTROL_TRANSPARENT_200
  const COLOR_CONTROL_TRANSPARENT_DEFAULT = baseColors.COLOR_BASIC_CONTROL_TRANSPARENT_100
  const COLOR_CONTROL_TRANSPARENT_ACTIVE = baseColors.COLOR_BASIC_CONTROL_TRANSPARENT_300
  const COLOR_CONTROL_TRANSPARENT_DISABLED = baseColors.COLOR_BASIC_TRANSPARENT_200
  const COLOR_CONTROL_TRANSPARENT_FOCUS_BORDER = baseColors.COLOR_BASIC_100
  const COLOR_CONTROL_TRANSPARENT_HOVER_BORDER = baseColors.COLOR_BASIC_100
  const COLOR_CONTROL_TRANSPARENT_DEFAULT_BORDER = baseColors.COLOR_BASIC_100
  const COLOR_CONTROL_TRANSPARENT_ACTIVE_BORDER = baseColors.COLOR_BASIC_100
  const COLOR_CONTROL_TRANSPARENT_DISABLED_BORDER = baseColors.COLOR_BASIC_TRANSPARENT_300
  //#endregion

  /**
   * Backgrounds and borders - basic, alternative and primary
   *
   * A theme has 3 backgrounds (basic, alternative, primary) each of 4 shades and also 3 borders, each of 5
   * shades (background shades count + 1). basic and alternative backgrounds and borders utilize basic color
   * shades as a source. primary backgrounds and borders use primary color.
   * Basic backgrounds and borders heavily used by components (cards, accordions, menu, etc), when alternative (tooltips)
   * and primary only for particular use cases, to distinguish some of the components.
   */
  //#region
  const BACKGROUND_BASIC_COLOR_1 = baseColors.COLOR_BASIC_100
  const BACKGROUND_BASIC_COLOR_2 = baseColors.COLOR_BASIC_200
  const BACKGROUND_BASIC_COLOR_3 = baseColors.COLOR_BASIC_300
  const BACKGROUND_BASIC_COLOR_4 = baseColors.COLOR_BASIC_400

  const BORDER_BASIC_COLOR_1 = baseColors.COLOR_BASIC_100
  const BORDER_BASIC_COLOR_2 = baseColors.COLOR_BASIC_200
  const BORDER_BASIC_COLOR_3 = baseColors.COLOR_BASIC_300
  const BORDER_BASIC_COLOR_4 = baseColors.COLOR_BASIC_400
  const BORDER_BASIC_COLOR_5 = baseColors.COLOR_BASIC_500

  const BACKGROUND_ALTERNATIVE_COLOR_1 = baseColors.COLOR_BASIC_800
  const BACKGROUND_ALTERNATIVE_COLOR_2 = baseColors.COLOR_BASIC_900
  const BACKGROUND_ALTERNATIVE_COLOR_3 = baseColors.COLOR_BASIC_1000
  const BACKGROUND_ALTERNATIVE_COLOR_4 = baseColors.COLOR_BASIC_1100

  const BORDER_ALTERNATIVE_COLOR_1 = baseColors.COLOR_BASIC_800
  const BORDER_ALTERNATIVE_COLOR_2 = baseColors.COLOR_BASIC_900
  const BORDER_ALTERNATIVE_COLOR_3 = baseColors.COLOR_BASIC_1000
  const BORDER_ALTERNATIVE_COLOR_4 = baseColors.COLOR_BASIC_1100
  const BORDER_ALTERNATIVE_COLOR_5 = baseColors.COLOR_BASIC_1100

  const BACKGROUND_PRIMARY_COLOR_1 = baseColors.COLOR_PRIMARY_500
  const BACKGROUND_PRIMARY_COLOR_2 = baseColors.COLOR_PRIMARY_600
  const BACKGROUND_PRIMARY_COLOR_3 = baseColors.COLOR_PRIMARY_700
  const BACKGROUND_PRIMARY_COLOR_4 = baseColors.COLOR_PRIMARY_800

  const BORDER_PRIMARY_COLOR_1 = baseColors.COLOR_BASIC_500
  const BORDER_PRIMARY_COLOR_2 = baseColors.COLOR_BASIC_600
  const BORDER_PRIMARY_COLOR_3 = baseColors.COLOR_BASIC_700
  const BORDER_PRIMARY_COLOR_4 = baseColors.COLOR_BASIC_800
  const BORDER_PRIMARY_COLOR_5 = baseColors.COLOR_BASIC_900
  //#endregion

  /**
   * Text colors - general and status
   *
   * There are 5 colors within the theme: basic - main text color, used on top of basic backgrounds
   * alternate - alternative color used on top of alternate backgrounds, control - used on top of
   * status colors (primary, success, etc), disabled color - to indicate text/component disabled state
   * and hint - for secondary texts (for example placeholders and captions).
   */
  //#region
  const TEXT_BASIC_COLOR = baseColors.COLOR_BASIC_800
  const TEXT_ALTERNATE_COLOR = baseColors.COLOR_BASIC_100
  const TEXT_CONTROL_COLOR = baseColors.COLOR_BASIC_100
  const TEXT_DISABLED_COLOR = baseColors.COLOR_BASIC_TRANSPARENT_600
  const TEXT_HINT_COLOR = baseColors.COLOR_BASIC_600

  const TEXT_PRIMARY_COLOR = COLOR_PRIMARY_DEFAULT
  const TEXT_PRIMARY_FOCUS_COLOR = COLOR_PRIMARY_FOCUS
  const TEXT_PRIMARY_HOVER_COLOR = COLOR_PRIMARY_HOVER
  const TEXT_PRIMARY_ACTIVE_COLOR = COLOR_PRIMARY_ACTIVE
  const TEXT_PRIMARY_DISABLED_COLOR = baseColors.COLOR_PRIMARY_400

  const TEXT_SUCCESS_COLOR = COLOR_SUCCESS_DEFAULT
  const TEXT_SUCCESS_FOCUS_COLOR = COLOR_SUCCESS_FOCUS
  const TEXT_SUCCESS_HOVER_COLOR = COLOR_SUCCESS_HOVER
  const TEXT_SUCCESS_ACTIVE_COLOR = COLOR_SUCCESS_ACTIVE
  const TEXT_SUCCESS_DISABLED_COLOR = baseColors.COLOR_SUCCESS_400

  const TEXT_INFO_COLOR = COLOR_INFO_DEFAULT
  const TEXT_INFO_FOCUS_COLOR = COLOR_INFO_FOCUS
  const TEXT_INFO_HOVER_COLOR = COLOR_INFO_HOVER
  const TEXT_INFO_ACTIVE_COLOR = COLOR_INFO_ACTIVE
  const TEXT_INFO_DISABLED_COLOR = baseColors.COLOR_INFO_400

  const TEXT_WARNING_COLOR = COLOR_WARNING_DEFAULT
  const TEXT_WARNING_FOCUS_COLOR = COLOR_WARNING_FOCUS
  const TEXT_WARNING_HOVER_COLOR = COLOR_WARNING_HOVER
  const TEXT_WARNING_ACTIVE_COLOR = COLOR_WARNING_ACTIVE
  const TEXT_WARNING_DISABLED_COLOR = baseColors.COLOR_WARNING_400

  const TEXT_DANGER_COLOR = COLOR_DANGER_DEFAULT
  const TEXT_DANGER_FOCUS_COLOR = COLOR_DANGER_FOCUS
  const TEXT_DANGER_HOVER_COLOR = COLOR_DANGER_HOVER
  const TEXT_DANGER_ACTIVE_COLOR = COLOR_DANGER_ACTIVE
  const TEXT_DANGER_DISABLED_COLOR = baseColors.COLOR_DANGER_400
  //#endregion

  return {
    COLOR_BASIC_FOCUS,
    COLOR_BASIC_HOVER,
    COLOR_BASIC_DEFAULT,
    COLOR_BASIC_ACTIVE,
    COLOR_BASIC_DISABLED,
    COLOR_BASIC_FOCUS_BORDER,
    COLOR_BASIC_HOVER_BORDER,
    COLOR_BASIC_DEFAULT_BORDER,
    COLOR_BASIC_ACTIVE_BORDER,
    COLOR_BASIC_DISABLED_BORDER,

    COLOR_BASIC_TRANSPARENT_FOCUS,
    COLOR_BASIC_TRANSPARENT_HOVER,
    COLOR_BASIC_TRANSPARENT_DEFAULT,
    COLOR_BASIC_TRANSPARENT_ACTIVE,
    COLOR_BASIC_TRANSPARENT_DISABLED,
    COLOR_BASIC_TRANSPARENT_FOCUS_BORDER,
    COLOR_BASIC_TRANSPARENT_HOVER_BORDER,
    COLOR_BASIC_TRANSPARENT_DEFAULT_BORDER,
    COLOR_BASIC_TRANSPARENT_ACTIVE_BORDER,
    COLOR_BASIC_TRANSPARENT_DISABLED_BORDER,

    COLOR_PRIMARY_FOCUS,
    COLOR_PRIMARY_HOVER,
    COLOR_PRIMARY_DEFAULT,
    COLOR_PRIMARY_ACTIVE,
    COLOR_PRIMARY_DISABLED,
    COLOR_PRIMARY_FOCUS_BORDER,
    COLOR_PRIMARY_HOVER_BORDER,
    COLOR_PRIMARY_DEFAULT_BORDER,
    COLOR_PRIMARY_ACTIVE_BORDER,
    COLOR_PRIMARY_DISABLED_BORDER,

    COLOR_PRIMARY_TRANSPARENT_FOCUS,
    COLOR_PRIMARY_TRANSPARENT_HOVER,
    COLOR_PRIMARY_TRANSPARENT_DEFAULT,
    COLOR_PRIMARY_TRANSPARENT_ACTIVE,
    COLOR_PRIMARY_TRANSPARENT_DISABLED,
    COLOR_PRIMARY_TRANSPARENT_FOCUS_BORDER,
    COLOR_PRIMARY_TRANSPARENT_HOVER_BORDER,
    COLOR_PRIMARY_TRANSPARENT_DEFAULT_BORDER,
    COLOR_PRIMARY_TRANSPARENT_ACTIVE_BORDER,
    COLOR_PRIMARY_TRANSPARENT_DISABLED_BORDER,

    COLOR_SUCCESS_FOCUS,
    COLOR_SUCCESS_HOVER,
    COLOR_SUCCESS_DEFAULT,
    COLOR_SUCCESS_ACTIVE,
    COLOR_SUCCESS_DISABLED,
    COLOR_SUCCESS_FOCUS_BORDER,
    COLOR_SUCCESS_HOVER_BORDER,
    COLOR_SUCCESS_DEFAULT_BORDER,
    COLOR_SUCCESS_ACTIVE_BORDER,
    COLOR_SUCCESS_DISABLED_BORDER,

    COLOR_SUCCESS_TRANSPARENT_FOCUS,
    COLOR_SUCCESS_TRANSPARENT_FOCUS_BORDER,
    COLOR_SUCCESS_TRANSPARENT_HOVER,
    COLOR_SUCCESS_TRANSPARENT_HOVER_BORDER,
    COLOR_SUCCESS_TRANSPARENT_DEFAULT,
    COLOR_SUCCESS_TRANSPARENT_DEFAULT_BORDER,
    COLOR_SUCCESS_TRANSPARENT_ACTIVE,
    COLOR_SUCCESS_TRANSPARENT_ACTIVE_BORDER,
    COLOR_SUCCESS_TRANSPARENT_DISABLED,
    COLOR_SUCCESS_TRANSPARENT_DISABLED_BORDER,

    COLOR_INFO_FOCUS,
    COLOR_INFO_HOVER,
    COLOR_INFO_DEFAULT,
    COLOR_INFO_ACTIVE,
    COLOR_INFO_DISABLED,
    COLOR_INFO_FOCUS_BORDER,
    COLOR_INFO_HOVER_BORDER,
    COLOR_INFO_DEFAULT_BORDER,
    COLOR_INFO_ACTIVE_BORDER,
    COLOR_INFO_DISABLED_BORDER,

    COLOR_INFO_TRANSPARENT_FOCUS,
    COLOR_INFO_TRANSPARENT_HOVER,
    COLOR_INFO_TRANSPARENT_DEFAULT,
    COLOR_INFO_TRANSPARENT_ACTIVE,
    COLOR_INFO_TRANSPARENT_DISABLED,
    COLOR_INFO_TRANSPARENT_FOCUS_BORDER,
    COLOR_INFO_TRANSPARENT_HOVER_BORDER,
    COLOR_INFO_TRANSPARENT_DEFAULT_BORDER,
    COLOR_INFO_TRANSPARENT_ACTIVE_BORDER,
    COLOR_INFO_TRANSPARENT_DISABLED_BORDER,

    COLOR_WARNING_FOCUS,
    COLOR_WARNING_HOVER,
    COLOR_WARNING_DEFAULT,
    COLOR_WARNING_ACTIVE,
    COLOR_WARNING_DISABLED,
    COLOR_WARNING_FOCUS_BORDER,
    COLOR_WARNING_HOVER_BORDER,
    COLOR_WARNING_DEFAULT_BORDER,
    COLOR_WARNING_ACTIVE_BORDER,
    COLOR_WARNING_DISABLED_BORDER,

    COLOR_WARNING_TRANSPARENT_FOCUS,
    COLOR_WARNING_TRANSPARENT_HOVER,
    COLOR_WARNING_TRANSPARENT_DEFAULT,
    COLOR_WARNING_TRANSPARENT_ACTIVE,
    COLOR_WARNING_TRANSPARENT_DISABLED,
    COLOR_WARNING_TRANSPARENT_FOCUS_BORDER,
    COLOR_WARNING_TRANSPARENT_HOVER_BORDER,
    COLOR_WARNING_TRANSPARENT_DEFAULT_BORDER,
    COLOR_WARNING_TRANSPARENT_ACTIVE_BORDER,
    COLOR_WARNING_TRANSPARENT_DISABLED_BORDER,

    COLOR_DANGER_FOCUS,
    COLOR_DANGER_HOVER,
    COLOR_DANGER_DEFAULT,
    COLOR_DANGER_ACTIVE,
    COLOR_DANGER_DISABLED,
    COLOR_DANGER_FOCUS_BORDER,
    COLOR_DANGER_HOVER_BORDER,
    COLOR_DANGER_DEFAULT_BORDER,
    COLOR_DANGER_ACTIVE_BORDER,
    COLOR_DANGER_DISABLED_BORDER,

    COLOR_DANGER_TRANSPARENT_FOCUS,
    COLOR_DANGER_TRANSPARENT_HOVER,
    COLOR_DANGER_TRANSPARENT_DEFAULT,
    COLOR_DANGER_TRANSPARENT_ACTIVE,
    COLOR_DANGER_TRANSPARENT_DISABLED,
    COLOR_DANGER_TRANSPARENT_FOCUS_BORDER,
    COLOR_DANGER_TRANSPARENT_HOVER_BORDER,
    COLOR_DANGER_TRANSPARENT_DEFAULT_BORDER,
    COLOR_DANGER_TRANSPARENT_ACTIVE_BORDER,
    COLOR_DANGER_TRANSPARENT_DISABLED_BORDER,

    COLOR_CONTROL_FOCUS,
    COLOR_CONTROL_HOVER,
    COLOR_CONTROL_DEFAULT,
    COLOR_CONTROL_ACTIVE,
    COLOR_CONTROL_DISABLED,
    COLOR_CONTROL_FOCUS_BORDER,
    COLOR_CONTROL_HOVER_BORDER,
    COLOR_CONTROL_DEFAULT_BORDER,
    COLOR_CONTROL_ACTIVE_BORDER,
    COLOR_CONTROL_DISABLED_BORDER,

    COLOR_CONTROL_TRANSPARENT_FOCUS,
    COLOR_CONTROL_TRANSPARENT_HOVER,
    COLOR_CONTROL_TRANSPARENT_DEFAULT,
    COLOR_CONTROL_TRANSPARENT_ACTIVE,
    COLOR_CONTROL_TRANSPARENT_DISABLED,
    COLOR_CONTROL_TRANSPARENT_FOCUS_BORDER,
    COLOR_CONTROL_TRANSPARENT_HOVER_BORDER,
    COLOR_CONTROL_TRANSPARENT_DEFAULT_BORDER,
    COLOR_CONTROL_TRANSPARENT_ACTIVE_BORDER,
    COLOR_CONTROL_TRANSPARENT_DISABLED_BORDER,

    BACKGROUND_BASIC_COLOR_1,
    BACKGROUND_BASIC_COLOR_2,
    BACKGROUND_BASIC_COLOR_3,
    BACKGROUND_BASIC_COLOR_4,

    BORDER_BASIC_COLOR_1,
    BORDER_BASIC_COLOR_2,
    BORDER_BASIC_COLOR_3,
    BORDER_BASIC_COLOR_4,
    BORDER_BASIC_COLOR_5,

    BACKGROUND_ALTERNATIVE_COLOR_1,
    BACKGROUND_ALTERNATIVE_COLOR_2,
    BACKGROUND_ALTERNATIVE_COLOR_3,
    BACKGROUND_ALTERNATIVE_COLOR_4,

    BORDER_ALTERNATIVE_COLOR_1,
    BORDER_ALTERNATIVE_COLOR_2,
    BORDER_ALTERNATIVE_COLOR_3,
    BORDER_ALTERNATIVE_COLOR_4,
    BORDER_ALTERNATIVE_COLOR_5,

    BACKGROUND_PRIMARY_COLOR_1,
    BACKGROUND_PRIMARY_COLOR_2,
    BACKGROUND_PRIMARY_COLOR_3,
    BACKGROUND_PRIMARY_COLOR_4,

    BORDER_PRIMARY_COLOR_1,
    BORDER_PRIMARY_COLOR_2,
    BORDER_PRIMARY_COLOR_3,
    BORDER_PRIMARY_COLOR_4,
    BORDER_PRIMARY_COLOR_5,

    TEXT_BASIC_COLOR,
    TEXT_ALTERNATE_COLOR,
    TEXT_CONTROL_COLOR,
    TEXT_DISABLED_COLOR,
    TEXT_HINT_COLOR,

    TEXT_PRIMARY_COLOR,
    TEXT_PRIMARY_FOCUS_COLOR,
    TEXT_PRIMARY_HOVER_COLOR,
    TEXT_PRIMARY_ACTIVE_COLOR,
    TEXT_PRIMARY_DISABLED_COLOR,

    TEXT_SUCCESS_COLOR,
    TEXT_SUCCESS_FOCUS_COLOR,
    TEXT_SUCCESS_HOVER_COLOR,
    TEXT_SUCCESS_ACTIVE_COLOR,
    TEXT_SUCCESS_DISABLED_COLOR,

    TEXT_INFO_COLOR,
    TEXT_INFO_FOCUS_COLOR,
    TEXT_INFO_HOVER_COLOR,
    TEXT_INFO_ACTIVE_COLOR,
    TEXT_INFO_DISABLED_COLOR,

    TEXT_WARNING_COLOR,
    TEXT_WARNING_FOCUS_COLOR,
    TEXT_WARNING_HOVER_COLOR,
    TEXT_WARNING_ACTIVE_COLOR,
    TEXT_WARNING_DISABLED_COLOR,

    TEXT_DANGER_COLOR,
    TEXT_DANGER_FOCUS_COLOR,
    TEXT_DANGER_HOVER_COLOR,
    TEXT_DANGER_ACTIVE_COLOR,
    TEXT_DANGER_DISABLED_COLOR,
  }
}

export type TColors = ReturnType<typeof colorMapping>

/**
 * Type used allowing user to create a typed override object for colors in theme.
 *
 * Code sample:
 *
 * ```ts
 * const customColors: TCustomColors = {
 *   COLOR_PRIMARY_FOCUS = 'red'
 * }
 *
 * const theme = createTheme([Button, Card], {
 *   colors: customColors
 *   Button: { background: 'green' },
 *   Card: { color: 'red' }
 * })
 * ```
 */
export type TCustomColors = Partial<TColors>
