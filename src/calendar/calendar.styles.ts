import styled, { css } from "styled-components/macro";

import { Card } from "../card";
import { CircleButton } from "../inputs/circle-button";
import { Grid } from "../layout/grid";
import { componentAnimation } from "../theming/mixins";
import { StyledButton } from "../inputs/button/button.styles";

export const StyledCard = styled(Card)`
  ${({ theme: { Calendar } }) => css`
    background-color: ${Calendar.backgroundColor};

    border: ${Calendar.borderWidth} ${Calendar.borderStyle}
      ${Calendar.borderColor};
    border-radius: ${Calendar.borderRadius};

    box-shadow: none;
    margin: 0;
    width: ${Calendar.width};

    padding: 0;

    overflow: hidden;
  `};
`;

export const Navigation = styled.div`
  ${({ theme: { Calendar } }) => css`
    display: flex;
    border: none;
    justify-content: space-between;

    padding: ${Calendar.navigationPadding};

    color: ${Calendar.navigationTextColor};
    font-family: ${Calendar.navigationTextFontFamily};
    font-size: ${Calendar.navigationTitleTextFontSize};
    font-weight: ${Calendar.navigationTitleTextFontWeight};
    line-height: ${Calendar.navigationTitleTextLineHeight};
  `};
`;

export const DateMonthWrapper = styled.div`
  ${({ theme: { Calendar } }) => css`
    /* TODO: Replace all this with a <Button /> when implementing a year picker, https://akveo.github.io/nebular/docs/components/calendar/overview#nbcalendarcomponent */

    margin-left: 1rem;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    text-align: center;
    align-self: center;
    font-weight: normal;
    text-transform: uppercase;

    color: ${Calendar.navigationTextColor};
    font-family: ${Calendar.navigationTextFontFamily};
    font-size: ${Calendar.navigationTitleTextFontSize};
    font-weight: ${Calendar.navigationTitleTextFontWeight};
    line-height: ${Calendar.navigationTitleTextLineHeight};
  `};
`;

export const PageableNavigation = styled.div`
  ${({ theme: { Calendar } }) => css`
    ${StyledButton} {
      color: ${Calendar.navigationTextColor};
      font-family: ${Calendar.navigationTextFontFamily};
      font-size: ${Calendar.navigationTitleTextFontSize};
      font-weight: ${Calendar.navigationTitleTextFontWeight};
      line-height: ${Calendar.navigationTitleTextLineHeight};
    }
  `};
`;

export const Body = styled.div``;

/** Grid of daynames shown above the days, like Mon, Tue, Wed etc */
export const DayNamesGrid = styled(Grid)`
  ${({ theme: { Calendar } }) => css`
    display: flex;
    padding-left: ${Calendar.pickerPaddingStart};
    padding-right: ${Calendar.pickerPaddingEnd};

    justify-content: space-between;

    text-transform: capitalize;

    border-top: ${Calendar.weekdayDividerWidth} solid
      ${Calendar.weekdayDividerColor};
    border-bottom: ${Calendar.weekdayDividerWidth} solid
      ${Calendar.weekdayDividerColor};
  `};
`;

/** A day rendered in DayNamesGrid */
export const StyledDayName = styled.div<{ holiday?: boolean }>`
  ${({ holiday, theme: { Calendar } }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${Calendar.weekdayBackground};

    width: ${Calendar.weekdayWidth};
    height: ${Calendar.weekdayHeight};
    color: ${Calendar.weekdayTextColor};
    font-size: ${Calendar.weekdayTextFontSize};
    font-weight: ${Calendar.weekdayTextFontWeight};
    line-height: ${Calendar.weekdayTextLineHeight};

    ${holiday &&
    css`
      color: ${Calendar.weekdayHolidayTextColor};
    `};
  `};
`;

export const Picker = styled.div`
  display: block;
`;

export const DayPicker = styled(Grid)`
  ${({ theme: { Calendar } }) => css`
    gap: 0;

    padding-right: ${Calendar.pickerPaddingEnd};
    padding-left: ${Calendar.pickerPaddingStart};
  `};
`;

export const CellContent = styled.div`
  ${({ theme: { Calendar } }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    border-radius: ${Calendar.borderRadius};

    ${componentAnimation("background-color, border-color, color")};
  `};
`;

/** A day rendered in the calendar */
export const DayCell = styled.div<{
  size?: "large";
  isSelected: boolean;
  isToday: boolean;
  isCurrentMonth: boolean;
}>`
  ${({ isCurrentMonth, isSelected, isToday, size, theme: { Calendar } }) => css`
    width: ${Calendar.dayCellWidth};
    height: ${Calendar.dayCellHeight};
    display: flex;

    align-items: center;
    justify-content: center;

    font-family: ${Calendar.textFontFamily};
    font-size: ${Calendar.textFontSize};
    font-weight: ${Calendar.textFontWeight};
    line-height: ${Calendar.textLineHeight};
    color: ${Calendar.textColor};
    text-transform: uppercase;

    cursor: pointer;

    ${size === "large" &&
    css`
      width: ${Calendar.dayCellLargeWidth};
      height: ${Calendar.dayCellLargeHeight};
    `};

    ${!isCurrentMonth &&
    css`
      color: ${Calendar.cellInactiveTextColor};
    `};

    // &:not(.disabled):not(.empty) {
    &:hover ${CellContent} {
      background-color: ${Calendar.cellHoverBackgroundColor};
      border-color: ${Calendar.cellHoverBorderColor};
      color: ${Calendar.cellHoverTextColor};
      font-size: ${Calendar.cellHoverTextFontSize};
      font-weight: ${Calendar.cellHoverTextFontWeight};
      line-height: ${Calendar.cellHoverTextLineHeight};
    }

    &:active ${CellContent} {
      background-color: ${Calendar.cellActiveBackgroundColor};
      border-color: ${Calendar.cellActiveBorderColor};
      color: ${Calendar.cellActiveTextColor};
      font-size: ${Calendar.cellActiveTextFontSize};
      font-weight: ${Calendar.cellActiveTextFontWeight};
      line-height: ${Calendar.cellActiveTextLineHeight};
    }

    ${isToday &&
    css`
      ${CellContent} {
        background-color: ${Calendar.cellTodayBackgroundColor};
        border: 1px solid ${Calendar.cellTodayBorderColor};
        color: ${Calendar.cellTodayTextColor};
        font-size: ${Calendar.cellTodayTextFontSize};
        font-weight: ${Calendar.cellTodayTextFontWeight};
        line-height: ${Calendar.cellTodayTextLineHeight};

        &:hover {
          background-color: ${Calendar.cellTodayHoverBackgroundColor};
          border-color: ${Calendar.cellTodayHoverBorderColor};
        }

        &:active {
          background-color: ${Calendar.cellTodayActiveBackgroundColor};
          border-color: ${Calendar.cellTodayActiveBorderColor};
        }
      }
    `};

    ${isSelected &&
    css`
      ${CellContent} {
        background-color: ${Calendar.cellSelectedBackgroundColor};
        border-color: ${Calendar.cellSelectedBorderColor};
        color: ${Calendar.cellSelectedTextColor};
        font-size: ${Calendar.cellSelectedTextFontSize};
        font-weight: ${Calendar.cellSelectedTextFontWeight};
        line-height: ${Calendar.cellSelectedTextLineHeight};

        &:hover {
          background-color: ${Calendar.cellSelectedHoverBackgroundColor};
          border-color: ${Calendar.cellSelectedHoverBorderColor};
        }

        &:active {
          background-color: ${Calendar.cellSelectedActiveBackgroundColor};
          border-color: ${Calendar.cellSelectedActiveBorderColor};
        }
      }
    `};

    ${isToday &&
    isSelected &&
    css`
      background-color: ${Calendar.cellSelectedBackgroundColor};
      border-radius: ${Calendar.borderRadius};

      ${CellContent} {
        background-color: ${Calendar.cellTodaySelectedBackgroundColor};
        border-color: ${Calendar.cellTodaySelectedBorderColor};
        color: ${Calendar.cellTodaySelectedTextColor};

        &:hover {
          background-color: ${Calendar.cellTodaySelectedHoverBackgroundColor};
          border-color: ${Calendar.cellTodaySelectedHoverBorderColor};
        }

        &:focus {
          background-color: ${Calendar.cellTodaySelectedActiveBackgroundColor};
          border-color: ${Calendar.cellTodaySelectedActiveBorderColor};
        }
      }
    `};
  `};
`;

export const MonthButton = styled(CircleButton)`
  background: ${({ theme }): string => theme.colors.BACKGROUND_BASIC_COLOR_2};
  color: ${({ theme }): string => theme.colors.COLOR_PRIMARY_DEFAULT};

  &[disabled] {
    background: ${({ theme }): string => theme.Calendar.borderColor};
  }
`;
