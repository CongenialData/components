import { TCommonTheme, TThemeFromFn, tuple } from "../theming";

export const calendarTheme = ({
  support,
  typography,
  colors,
}: TCommonTheme) => {
  // Pre-defined variable mapping. See note in src/components/theming/docs/cdab-notes.md

  const calendar: any = {
    // FIXME: Use correct type of calendar
    TEXT_FONT_FAMILY: typography.TEXT_SUBTITLE_FONT_FAMILY,
    TEXT_FONT_SIZE: typography.TEXT_SUBTITLE_FONT_SIZE,
    TEXT_FONT_WEIGHT: typography.TEXT_SUBTITLE_FONT_WEIGHT,
    TEXT_LINE_HEIGHT: typography.TEXT_SUBTITLE_LINE_HEIGHT,
    WEEKDAY_TEXT_COLOR: colors.TEXT_HINT_COLOR,
    DAY_CELL_HEIGHT: "2.75rem",
    DAY_CELL_WIDTH: "2.75rem",
    MONTH_CELL_WIDTH: "4.8125rem",
  };
  calendar.WEEKDAY_HEIGHT = calendar.DAY_CELL_HEIGHT;
  calendar.MONTH_CELL_HEIGHT = calendar.DAY_CELL_HEIGHT;
  calendar.YEAR_CELL_WIDTH = calendar.MONTH_CELL_WIDTH;
  calendar.YEAR_CELL_HEIGHT = calendar.MONTH_CELL_HEIGHT;
  calendar.WEEKDAY_WIDTH = calendar.DAY_CELL_WIDTH;

  return tuple([
    "Calendar",
    {
      width: "20.625rem",
      backgroundColor: colors.BACKGROUND_BASIC_COLOR_1,
      borderColor: colors.BORDER_BASIC_COLOR_4,
      borderStyle: "solid",
      borderWidth: "0.0625rem",
      borderRadius: support.BORDER_RADIUS,
      textColor: colors.TEXT_BASIC_COLOR,
      textFontFamily: typography.TEXT_SUBTITLE_FONT_FAMILY,
      textFontSize: typography.TEXT_SUBTITLE_FONT_SIZE,
      textFontWeight: typography.TEXT_SUBTITLE_FONT_WEIGHT,
      textLineHeight: typography.TEXT_SUBTITLE_LINE_HEIGHT,

      pickerPaddingTop: "0.25rem",
      pickerPaddingBottom: "0.625rem",
      pickerPaddingStart: "0.625rem",
      pickerPaddingEnd: "0.625rem",

      navigationTextColor: colors.TEXT_BASIC_COLOR,
      navigationTextFontFamily: typography.TEXT_BUTTON_FONT_FAMILY,
      navigationTitleTextFontSize: typography.TEXT_BUTTON_MEDIUM_FONT_SIZE,
      navigationTitleTextFontWeight: typography.TEXT_BUTTON_FONT_WEIGHT,
      navigationTitleTextLineHeight: typography.TEXT_BUTTON_MEDIUM_LINE_HEIGHT,
      navigationPadding: "0.625rem 0.25rem",

      cellInactiveTextColor: colors.TEXT_HINT_COLOR,

      cellDisabledTextColor: colors.TEXT_DISABLED_COLOR,

      cellHoverBackgroundColor: colors.BACKGROUND_BASIC_COLOR_2,
      cellHoverBorderColor: colors.BACKGROUND_BASIC_COLOR_2,
      cellHoverTextColor: colors.TEXT_BASIC_COLOR,
      cellHoverTextFontSize: calendar.TEXT_FONT_SIZE,
      cellHoverTextFontWeight: calendar.TEXT_FONT_WEIGHT,
      cellHoverTextLineHeight: calendar.TEXT_LINE_HEIGHT,

      cellActiveBackgroundColor: colors.COLOR_PRIMARY_ACTIVE,
      cellActiveBorderColor: colors.COLOR_PRIMARY_ACTIVE_BORDER,
      cellActiveTextColor: colors.TEXT_CONTROL_COLOR,
      cellActiveTextFontSize: calendar.TEXT_FONT_SIZE,
      cellActiveTextFontWeight: calendar.TEXT_FONT_WEIGHT,
      cellActiveTextLineHeight: calendar.TEXT_LINE_HEIGHT,

      cellTodayBackgroundColor: colors.COLOR_PRIMARY_TRANSPARENT_DEFAULT,
      cellTodayBorderColor: colors.COLOR_PRIMARY_TRANSPARENT_DEFAULT_BORDER,
      cellTodayTextColor: colors.TEXT_BASIC_COLOR,
      cellTodayTextFontSize: calendar.TEXT_FONT_SIZE,
      cellTodayTextFontWeight: calendar.TEXT_FONT_WEIGHT,
      cellTodayTextLineHeight: calendar.TEXT_LINE_HEIGHT,
      cellTodayHoverBackgroundColor: colors.COLOR_PRIMARY_TRANSPARENT_HOVER,
      cellTodayHoverBorderColor: colors.COLOR_PRIMARY_TRANSPARENT_HOVER_BORDER,
      cellTodayActiveBackgroundColor: colors.COLOR_PRIMARY_TRANSPARENT_ACTIVE,
      cellTodayActiveBorderColor:
        colors.COLOR_PRIMARY_TRANSPARENT_ACTIVE_BORDER,
      cellTodayDisabledBorderColor: colors.BORDER_BASIC_COLOR_4,

      cellTodaySelectedBackgroundColor:
        colors.COLOR_CONTROL_TRANSPARENT_DEFAULT,
      cellTodaySelectedBorderColor: "transparent",
      cellTodaySelectedTextColor: colors.TEXT_CONTROL_COLOR,
      cellTodaySelectedHoverBackgroundColor:
        colors.COLOR_CONTROL_TRANSPARENT_HOVER,
      cellTodaySelectedHoverBorderColor: "transparent",
      cellTodaySelectedActiveBackgroundColor:
        colors.COLOR_CONTROL_TRANSPARENT_ACTIVE,
      cellTodaySelectedActiveBorderColor: "transparent",

      cellTodayInRangeBackgroundColor: colors.COLOR_CONTROL_TRANSPARENT_DEFAULT,
      cellTodayInRangeBorderColor: "transparent",
      cellTodayInRangeTextColor: colors.TEXT_CONTROL_COLOR,
      cellTodayInRangeHoverBackgroundColor:
        colors.COLOR_CONTROL_TRANSPARENT_HOVER,
      cellTodayInRangeHoverBorderColor: "transparent",
      cellTodayInRangeActiveBackgroundColor:
        colors.COLOR_CONTROL_TRANSPARENT_ACTIVE,
      cellTodayInRangeActiveBorderColor: "transparent",

      cellSelectedBackgroundColor: colors.COLOR_PRIMARY_DEFAULT,
      cellSelectedBorderColor: colors.COLOR_PRIMARY_DEFAULT_BORDER,
      cellSelectedTextColor: colors.TEXT_CONTROL_COLOR,
      cellSelectedTextFontSize: calendar.TEXT_FONT_SIZE,
      cellSelectedTextFontWeight: calendar.TEXT_FONT_WEIGHT,
      cellSelectedTextLineHeight: calendar.TEXT_LINE_HEIGHT,
      cellSelectedHoverBackgroundColor: colors.COLOR_PRIMARY_HOVER,
      cellSelectedHoverBorderColor: colors.COLOR_PRIMARY_HOVER_BORDER,
      cellSelectedActiveBackgroundColor: colors.COLOR_PRIMARY_ACTIVE,
      cellSelectedActiveBorderColor: colors.COLOR_PRIMARY_ACTIVE_BORDER,

      dayCellWidth: calendar.DAY_CELL_WIDTH,
      dayCellHeight: calendar.DAY_CELL_HEIGHT,
      monthCellHeight: calendar.DAY_CELL_HEIGHT,
      yearCellWidth: calendar.MONTH_CELL_WIDTH,
      yearCellHeight: calendar.MONTH_CELL_HEIGHT,

      weekdayBackground: "transparent",
      weekdayDividerColor: support.DIVIDER_COLOR,
      weekdayDividerWidth: support.DIVIDER_WIDTH,
      weekdayTextColor: colors.TEXT_HINT_COLOR,
      weekdayTextFontSize: typography.TEXT_SUBTITLE_FONT_SIZE,
      weekdayTextFontWeight: typography.TEXT_SUBTITLE_FONT_WEIGHT,
      weekdayTextLineHeight: typography.TEXT_SUBTITLE_LINE_HEIGHT,
      weekdayHolidayTextColor: calendar.WEEKDAY_TEXT_COLOR,
      weekdayHeight: calendar.DAY_CELL_HEIGHT,
      weekdayWidth: calendar.DAY_CELL_WIDTH,

      weeknumberBackground: "transparent",
      weeknumberDividerColor: support.DIVIDER_COLOR,
      weeknumberDividerWidth: support.DIVIDER_WIDTH,
      weeknumberTextColor: colors.TEXT_HINT_COLOR,
      weeknumberTextFontSize: typography.TEXT_SUBTITLE_FONT_SIZE,
      weeknumberTextFontWeight: typography.TEXT_SUBTITLE_FONT_WEIGHT,
      weeknumberTextLineHeight: typography.TEXT_SUBTITLE_LINE_HEIGHT,
      weeknumberHeight: calendar.WEEKDAY_HEIGHT,
      weeknumberWidth: calendar.WEEKDAY_WIDTH,

      // LARGE
      largeWidth: "22.375rem",
      dayCellLargeWidth: "3rem",
      dayCellLargeHeight: "3rem",
      weekdayLargeHeight: calendar.DAY_CELL_LARGE_WIDTH,
      weekdayLargeWidth: calendar.DAY_CELL_LARGE_HEIGHT,
      weeknumberLargeHeight: calendar.WEEKDAY_LARGE_HEIGHT,
      weeknumberLargeWidth: calendar.WEEKDAY_LARGE_WIDTH,
      monthCellLargeWidth: "5.25rem",
      monthCellLargeHeight: calendar.DAY_CELL_LARGE_HEIGHT,
      yearCellLargeWidth: calendar.MONTH_CELL_LARGE_WIDTH,
      yearCellLargeHeight: calendar.MONTH_CELL_LARGE_HEIGHT,
    },
  ]);
};

export type CalendarTheme = TThemeFromFn<typeof calendarTheme>;
