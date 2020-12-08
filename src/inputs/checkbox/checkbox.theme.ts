import { TCommonTheme, TThemeFromFn, tuple } from '../theming';

export const checkboxTheme = ({
  support,
  typography,
  colors,
  baseColors,
}: TCommonTheme) =>
  tuple([
    'Checkbox',
    {
      cursor: 'pointer',
      height: '1.25rem',
      width: '1.25rem',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderRadius: '3px',
      outlineWidth: support.OUTLINE_WIDTH,
      outlineColor: support.OUTLINE_COLOR,
      textFontFamily: typography.TEXT_SUBTITLE_2_FONT_FAMILY,
      textFontSize: typography.TEXT_SUBTITLE_2_FONT_SIZE,
      textFontWeight: typography.TEXT_SUBTITLE_2_FONT_WEIGHT,
      textLineHeight: typography.TEXT_SUBTITLE_2_LINE_HEIGHT,
      textSpace: '0.6875rem',
      padding: '0',
      focusInsetShadowLength: '0 0 0 100vmax',
      status: {
        basic: {
          textColor: colors.TEXT_BASIC_COLOR,
          backgroundColor: colors.COLOR_BASIC_TRANSPARENT_DEFAULT,
          borderColor: colors.COLOR_BASIC_TRANSPARENT_DEFAULT_BORDER,
          checkedBackgroundColor: colors.COLOR_PRIMARY_DEFAULT,
          checkedBorderColor: colors.COLOR_PRIMARY_DEFAULT_BORDER,
          checkedCheckmarkColor: colors.TEXT_CONTROL_COLOR,
          indeterminateBackgroundColor: colors.COLOR_PRIMARY_DEFAULT,
          indeterminateBorderColor: colors.COLOR_PRIMARY_DEFAULT_BORDER,
          indeterminateCheckmarkColor: colors.TEXT_CONTROL_COLOR,
          focusBackgroundColor: colors.COLOR_BASIC_TRANSPARENT_FOCUS,
          focusBorderColor: colors.COLOR_BASIC_TRANSPARENT_FOCUS_BORDER,
          focusCheckedBackgroundColor: colors.COLOR_PRIMARY_FOCUS,
          focusCheckedBorderColor: colors.COLOR_BASIC_FOCUS_BORDER,
          hoverBackgroundColor: colors.COLOR_PRIMARY_TRANSPARENT_HOVER,
          hoverBorderColor: colors.COLOR_PRIMARY_TRANSPARENT_HOVER_BORDER,
          hoverCheckedBackgroundColor: colors.COLOR_PRIMARY_HOVER,
          hoverCheckedBorderColor: colors.COLOR_PRIMARY_HOVER_BORDER,
          activeBackgroundColor: colors.COLOR_BASIC_TRANSPARENT_ACTIVE,
          activeBorderColor: colors.COLOR_BASIC_TRANSPARENT_ACTIVE_BORDER,
          activeCheckedBackgroundColor: colors.COLOR_PRIMARY_ACTIVE,
          activeCheckedBorderColor: colors.COLOR_BASIC_ACTIVE_BORDER,
          disabledBackgroundColor: colors.COLOR_BASIC_TRANSPARENT_DISABLED,
          disabledBorderColor: colors.COLOR_BASIC_TRANSPARENT_DISABLED_BORDER,
          disabledCheckmarkColor: colors.TEXT_CONTROL_COLOR,
          disabledTextColor: colors.TEXT_DISABLED_COLOR,
          disabledCheckedBackgroundColor:
            baseColors.COLOR_BASIC_TRANSPARENT_600,
          disabledCheckedBorderColor: baseColors.COLOR_BASIC_TRANSPARENT_600,
        },
        primary: {
          textColor: colors.TEXT_BASIC_COLOR,
          backgroundColor: colors.COLOR_PRIMARY_TRANSPARENT_DEFAULT,
          borderColor: colors.COLOR_PRIMARY_TRANSPARENT_DEFAULT_BORDER,
          checkedBackgroundColor: colors.COLOR_PRIMARY_DEFAULT,
          checkedBorderColor: colors.COLOR_PRIMARY_DEFAULT_BORDER,
          checkedCheckmarkColor: colors.TEXT_CONTROL_COLOR,
          indeterminateBackgroundColor: colors.COLOR_PRIMARY_DEFAULT,
          indeterminateBorderColor: colors.COLOR_PRIMARY_DEFAULT_BORDER,
          indeterminateCheckmarkColor: colors.TEXT_CONTROL_COLOR,
          focusBackgroundColor: colors.COLOR_PRIMARY_TRANSPARENT_FOCUS,
          focusBorderColor: colors.COLOR_PRIMARY_TRANSPARENT_FOCUS_BORDER,
          focusCheckedBackgroundColor: colors.COLOR_PRIMARY_FOCUS,
          focusCheckedBorderColor: colors.COLOR_PRIMARY_FOCUS_BORDER,
          hoverBackgroundColor: colors.COLOR_PRIMARY_FOCUS_BORDER,
          hoverBorderColor: colors.COLOR_PRIMARY_TRANSPARENT_HOVER_BORDER,
          hoverCheckedBackgroundColor: colors.COLOR_PRIMARY_HOVER,
          hoverCheckedBorderColor: colors.COLOR_PRIMARY_HOVER_BORDER,
          activeBackgroundColor: colors.COLOR_PRIMARY_TRANSPARENT_ACTIVE,
          activeBorderColor: colors.COLOR_PRIMARY_TRANSPARENT_ACTIVE_BORDER,
          activeCheckedBackgroundColor: colors.COLOR_PRIMARY_ACTIVE,
          activeCheckedBorderColor: colors.COLOR_PRIMARY_ACTIVE_BORDER,
          disabledBackgroundColor: colors.COLOR_BASIC_TRANSPARENT_DISABLED,
          disabledBorderColor: colors.COLOR_BASIC_TRANSPARENT_DISABLED_BORDER,
          disabledCheckmarkColor: colors.TEXT_CONTROL_COLOR,
          disabledTextColor: colors.TEXT_DISABLED_COLOR,
          disabledCheckedBackgroundColor:
            baseColors.COLOR_BASIC_TRANSPARENT_600,
          disabledCheckedBorderColor: baseColors.COLOR_BASIC_TRANSPARENT_600,
        },
        success: {
          textColor: colors.TEXT_BASIC_COLOR,
          backgroundColor: colors.COLOR_SUCCESS_TRANSPARENT_DEFAULT,
          borderColor: colors.COLOR_SUCCESS_TRANSPARENT_DEFAULT_BORDER,
          checkedBackgroundColor: colors.COLOR_SUCCESS_DEFAULT,
          checkedBorderColor: colors.COLOR_SUCCESS_DEFAULT_BORDER,
          checkedCheckmarkColor: colors.TEXT_CONTROL_COLOR,
          indeterminateBackgroundColor: colors.COLOR_SUCCESS_DEFAULT,
          indeterminateBorderColor: colors.COLOR_SUCCESS_DEFAULT_BORDER,
          indeterminateCheckmarkColor: colors.TEXT_CONTROL_COLOR,
          focusBackgroundColor: colors.COLOR_SUCCESS_TRANSPARENT_FOCUS,
          focusBorderColor: colors.COLOR_SUCCESS_TRANSPARENT_FOCUS_BORDER,
          focusCheckedBackgroundColor: colors.COLOR_SUCCESS_FOCUS,
          focusCheckedBorderColor: colors.COLOR_SUCCESS_FOCUS_BORDER,
          hoverBackgroundColor: colors.COLOR_SUCCESS_FOCUS_BORDER,
          hoverBorderColor: colors.COLOR_SUCCESS_TRANSPARENT_HOVER_BORDER,
          hoverCheckedBackgroundColor: colors.COLOR_SUCCESS_HOVER,
          hoverCheckedBorderColor: colors.COLOR_SUCCESS_HOVER_BORDER,
          activeBackgroundColor: colors.COLOR_SUCCESS_TRANSPARENT_ACTIVE,
          activeBorderColor: colors.COLOR_SUCCESS_TRANSPARENT_ACTIVE_BORDER,
          activeCheckedBackgroundColor: colors.COLOR_SUCCESS_ACTIVE,
          activeCheckedBorderColor: colors.COLOR_SUCCESS_ACTIVE_BORDER,
          disabledBackgroundColor: colors.COLOR_BASIC_TRANSPARENT_DISABLED,
          disabledBorderColor: colors.COLOR_BASIC_TRANSPARENT_DISABLED_BORDER,
          disabledCheckmarkColor: colors.TEXT_CONTROL_COLOR,
          disabledTextColor: colors.TEXT_DISABLED_COLOR,
          disabledCheckedBackgroundColor:
            baseColors.COLOR_BASIC_TRANSPARENT_600,
          disabledCheckedBorderColor: baseColors.COLOR_BASIC_TRANSPARENT_600,
        },
        info: {
          textColor: colors.TEXT_BASIC_COLOR,
          backgroundColor: colors.COLOR_INFO_TRANSPARENT_DEFAULT,
          borderColor: colors.COLOR_INFO_TRANSPARENT_DEFAULT_BORDER,
          checkedBackgroundColor: colors.COLOR_INFO_DEFAULT,
          checkedBorderColor: colors.COLOR_INFO_DEFAULT_BORDER,
          checkedCheckmarkColor: colors.TEXT_CONTROL_COLOR,
          indeterminateBackgroundColor: colors.COLOR_INFO_DEFAULT,
          indeterminateBorderColor: colors.COLOR_INFO_DEFAULT_BORDER,
          indeterminateCheckmarkColor: colors.TEXT_CONTROL_COLOR,
          focusBackgroundColor: colors.COLOR_INFO_TRANSPARENT_FOCUS,
          focusBorderColor: colors.COLOR_INFO_TRANSPARENT_FOCUS_BORDER,
          focusCheckedBackgroundColor: colors.COLOR_INFO_FOCUS,
          focusCheckedBorderColor: colors.COLOR_INFO_FOCUS_BORDER,
          hoverBackgroundColor: colors.COLOR_INFO_FOCUS_BORDER,
          hoverBorderColor: colors.COLOR_INFO_TRANSPARENT_HOVER_BORDER,
          hoverCheckedBackgroundColor: colors.COLOR_INFO_HOVER,
          hoverCheckedBorderColor: colors.COLOR_INFO_HOVER_BORDER,
          activeBackgroundColor: colors.COLOR_INFO_TRANSPARENT_ACTIVE,
          activeBorderColor: colors.COLOR_INFO_TRANSPARENT_ACTIVE_BORDER,
          activeCheckedBackgroundColor: colors.COLOR_INFO_ACTIVE,
          activeCheckedBorderColor: colors.COLOR_INFO_ACTIVE_BORDER,
          disabledBackgroundColor: colors.COLOR_BASIC_TRANSPARENT_DISABLED,
          disabledBorderColor: colors.COLOR_BASIC_TRANSPARENT_DISABLED_BORDER,
          disabledCheckmarkColor: colors.TEXT_CONTROL_COLOR,
          disabledTextColor: colors.TEXT_DISABLED_COLOR,
          disabledCheckedBackgroundColor:
            baseColors.COLOR_BASIC_TRANSPARENT_600,
          disabledCheckedBorderColor: baseColors.COLOR_BASIC_TRANSPARENT_600,
        },
        warning: {
          textColor: colors.TEXT_BASIC_COLOR,
          backgroundColor: colors.COLOR_WARNING_TRANSPARENT_DEFAULT,
          borderColor: colors.COLOR_WARNING_TRANSPARENT_DEFAULT_BORDER,
          checkedBackgroundColor: colors.COLOR_WARNING_DEFAULT,
          checkedBorderColor: colors.COLOR_WARNING_DEFAULT_BORDER,
          checkedCheckmarkColor: colors.TEXT_CONTROL_COLOR,
          indeterminateBackgroundColor: colors.COLOR_WARNING_DEFAULT,
          indeterminateBorderColor: colors.COLOR_WARNING_DEFAULT_BORDER,
          indeterminateCheckmarkColor: colors.TEXT_CONTROL_COLOR,
          focusBackgroundColor: colors.COLOR_WARNING_TRANSPARENT_FOCUS,
          focusBorderColor: colors.COLOR_WARNING_TRANSPARENT_FOCUS_BORDER,
          focusCheckedBackgroundColor: colors.COLOR_WARNING_FOCUS,
          focusCheckedBorderColor: colors.COLOR_WARNING_FOCUS_BORDER,
          hoverBackgroundColor: colors.COLOR_WARNING_FOCUS_BORDER,
          hoverBorderColor: colors.COLOR_WARNING_TRANSPARENT_HOVER_BORDER,
          hoverCheckedBackgroundColor: colors.COLOR_WARNING_HOVER,
          hoverCheckedBorderColor: colors.COLOR_WARNING_HOVER_BORDER,
          activeBackgroundColor: colors.COLOR_WARNING_TRANSPARENT_ACTIVE,
          activeBorderColor: colors.COLOR_WARNING_TRANSPARENT_ACTIVE_BORDER,
          activeCheckedBackgroundColor: colors.COLOR_WARNING_ACTIVE,
          activeCheckedBorderColor: colors.COLOR_WARNING_ACTIVE_BORDER,
          disabledBackgroundColor: colors.COLOR_BASIC_TRANSPARENT_DISABLED,
          disabledBorderColor: colors.COLOR_BASIC_TRANSPARENT_DISABLED_BORDER,
          disabledCheckmarkColor: colors.TEXT_CONTROL_COLOR,
          disabledTextColor: colors.TEXT_DISABLED_COLOR,
          disabledCheckedBackgroundColor:
            baseColors.COLOR_BASIC_TRANSPARENT_600,
          disabledCheckedBorderColor: baseColors.COLOR_BASIC_TRANSPARENT_600,
        },
        danger: {
          textColor: colors.TEXT_BASIC_COLOR,
          backgroundColor: colors.COLOR_DANGER_TRANSPARENT_DEFAULT,
          borderColor: colors.COLOR_DANGER_TRANSPARENT_DEFAULT_BORDER,
          checkedBackgroundColor: colors.COLOR_DANGER_DEFAULT,
          checkedBorderColor: colors.COLOR_DANGER_DEFAULT_BORDER,
          checkedCheckmarkColor: colors.TEXT_CONTROL_COLOR,
          indeterminateBackgroundColor: colors.COLOR_DANGER_DEFAULT,
          indeterminateBorderColor: colors.COLOR_DANGER_DEFAULT_BORDER,
          indeterminateCheckmarkColor: colors.TEXT_CONTROL_COLOR,
          focusBackgroundColor: colors.COLOR_DANGER_TRANSPARENT_FOCUS,
          focusBorderColor: colors.COLOR_DANGER_TRANSPARENT_FOCUS_BORDER,
          focusCheckedBackgroundColor: colors.COLOR_DANGER_FOCUS,
          focusCheckedBorderColor: colors.COLOR_DANGER_FOCUS_BORDER,
          hoverBackgroundColor: colors.COLOR_DANGER_FOCUS_BORDER,
          hoverBorderColor: colors.COLOR_DANGER_TRANSPARENT_HOVER_BORDER,
          hoverCheckedBackgroundColor: colors.COLOR_DANGER_HOVER,
          hoverCheckedBorderColor: colors.COLOR_DANGER_HOVER_BORDER,
          activeBackgroundColor: colors.COLOR_DANGER_TRANSPARENT_ACTIVE,
          activeBorderColor: colors.COLOR_DANGER_TRANSPARENT_ACTIVE_BORDER,
          activeCheckedBackgroundColor: colors.COLOR_DANGER_ACTIVE,
          activeCheckedBorderColor: colors.COLOR_DANGER_ACTIVE_BORDER,
          disabledBackgroundColor: colors.COLOR_BASIC_TRANSPARENT_DISABLED,
          disabledBorderColor: colors.COLOR_BASIC_TRANSPARENT_DISABLED_BORDER,
          disabledCheckmarkColor: colors.TEXT_CONTROL_COLOR,
          disabledTextColor: colors.TEXT_DISABLED_COLOR,
          disabledCheckedBackgroundColor:
            baseColors.COLOR_BASIC_TRANSPARENT_600,
          disabledCheckedBorderColor: baseColors.COLOR_BASIC_TRANSPARENT_600,
        },
        control: {
          textColor: colors.TEXT_CONTROL_COLOR,
          backgroundColor: colors.COLOR_CONTROL_TRANSPARENT_DEFAULT,
          borderColor: colors.COLOR_CONTROL_TRANSPARENT_DEFAULT_BORDER,
          checkedBackgroundColor: colors.COLOR_CONTROL_DEFAULT,
          checkedBorderColor: colors.COLOR_CONTROL_DEFAULT_BORDER,
          checkedCheckmarkColor: baseColors.COLOR_BASIC_800,
          indeterminateBackgroundColor: colors.COLOR_CONTROL_DEFAULT,
          indeterminateBorderColor: colors.COLOR_CONTROL_DEFAULT_BORDER,
          indeterminateCheckmarkColor: baseColors.COLOR_BASIC_800,
          focusBackgroundColor: colors.COLOR_CONTROL_TRANSPARENT_FOCUS,
          focusBorderColor: colors.COLOR_CONTROL_TRANSPARENT_FOCUS_BORDER,
          focusCheckedBackgroundColor: colors.COLOR_CONTROL_FOCUS,
          focusCheckedBorderColor: colors.COLOR_CONTROL_FOCUS_BORDER,
          hoverBackgroundColor: colors.COLOR_CONTROL_TRANSPARENT_HOVER,
          hoverBorderColor: colors.COLOR_CONTROL_TRANSPARENT_HOVER_BORDER,
          hoverCheckedBackgroundColor: colors.COLOR_CONTROL_HOVER,
          hoverCheckedBorderColor: colors.COLOR_CONTROL_HOVER_BORDER,
          activeBackgroundColor: colors.COLOR_CONTROL_TRANSPARENT_ACTIVE,
          activeBorderColor: colors.COLOR_CONTROL_TRANSPARENT_ACTIVE_BORDER,
          activeCheckedBackgroundColor: colors.COLOR_CONTROL_ACTIVE,
          activeCheckedBorderColor: colors.COLOR_CONTROL_ACTIVE_BORDER,
          disabledBackgroundColor: colors.COLOR_CONTROL_TRANSPARENT_DISABLED,
          disabledBorderColor: colors.COLOR_CONTROL_TRANSPARENT_DISABLED_BORDER,
          disabledCheckmarkColor: colors.TEXT_CONTROL_COLOR,
          disabledTextColor: colors.TEXT_CONTROL_COLOR,
          disabledCheckedBackgroundColor:
            baseColors.COLOR_BASIC_TRANSPARENT_600,
          disabledCheckedBorderColor: baseColors.COLOR_BASIC_TRANSPARENT_600,
        },
      },
    },
  ]);

export type CheckboxTheme = TThemeFromFn<typeof checkboxTheme>;
