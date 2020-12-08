import React, { useCallback } from 'react';
import _ from 'lodash';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format, isSameDay, isSameMonth, isToday } from 'date-fns';

/* Import components here */
import {
  Body,
  CellContent,
  DateMonthWrapper,
  DayCell,
  DayNamesGrid,
  DayPicker,
  Navigation,
  PageableNavigation,
  Picker,
  StyledCard,
  StyledDayName,
} from './calendar.styles';
import { HideWhileLoading } from '../hide-while-loading';
import { Button } from '../inputs/button';

/* Import interfaces here */
import { CalendarProps, DayProps } from './calendar.interfaces';
import { calendarTheme } from './calendar.theme';

/* Import utilities here */
import { generateCalendar, getDayNames, monthName } from './calendar.utilities';

/**
 * Generate a string to be used as key in extraInfo
 * @param d - date to generate key for
 * @returns the key to be used
 */
const getExtraInfoKey = (d: Date): string => format(d, 'yyyy-MM-dd');

/**
 * prepare props for the Day component
 * @remarks This is a curried function
 * @param value - Current selected value in calendar
 * @param month - Current selected month in the calendar
 * @param extraInfo - Extra info dictionrary to fetch extra info from
 * @param date - generate props for this day
 *
 * @returns an object that can be used as props to the Day component
 */
const prepareItem = _.curry(function<T>(
  value: Date,
  month: Date,
  extraInfo: T,
  date: Date
): DayProps<T> {
  const key = getExtraInfoKey(date);
  const info = extraInfo ? extraInfo[key] : undefined;

  return {
    date,
    isToday: isToday(date),
    isSelected: isSameDay(value, date),
    isCurrentMonth: isSameMonth(month, date),
    extraInfo: info,
  };
});

const DefaultDayComponent = <T extends {}>(
  dayProps: DayProps<T>
): JSX.Element => {
  const { date, extraInfo, ...props } = dayProps;
  return (
    <DayCell {...props}>
      <CellContent>
        {date.getDate()}
        {extraInfo && `&nbsp;:&nbsp; ${extraInfo}`}
      </CellContent>
    </DayCell>
  );
};

export const DayNames = (props): JSX.Element => {
  const { dayTitleLength = 2 } = props;

  return (
    <DayNamesGrid columns={7}>
      {getDayNames(dayTitleLength).map(
        (dayName, index): JSX.Element => (
          <StyledDayName key={`dayname${index}`}>{dayName}</StyledDayName>
        )
      )}
    </DayNamesGrid>
  );
};

const Header = ({
  month,
  monthTitleLength,
  isLoading,
  onPrevMonthClick,
  onNextMonthClick,
}: {
  isLoading: boolean;
  onPrevMonthClick: () => void;
  onNextMonthClick: () => void;
  month: Date;
  monthTitleLength?: number;
}) => {
  const monthYearTitle = `${monthName(
    month,
    monthTitleLength
  )} ${month.getFullYear()}`;

  return (
    <Navigation>
      <DateMonthWrapper>{monthYearTitle}</DateMonthWrapper>
      <PageableNavigation>
        <Button
          appearance="ghost"
          disabled={isLoading}
          size="tiny"
          type="button"
          onClick={onPrevMonthClick}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </Button>
        <Button
          appearance="ghost"
          disabled={isLoading}
          size="tiny"
          type="button"
          onClick={onNextMonthClick}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </Button>
      </PageableNavigation>
    </Navigation>
  );
};

export const Calendar = <T extends {} = {}>(
  props: CalendarProps<T>
): JSX.Element => {
  const {
    value,
    month,
    className,
    onChangeMonth,
    onSelectDate,
    dayComponent,
    isLoading,
    error,
    monthTitleLength,
    ...styleProps
  } = props;
  let { extraInfo } = props;

  // Make sure it's not undefined
  extraInfo = extraInfo || {};

  const calendar: DayProps<T>[] = Array.from(generateCalendar(month)).map(
    prepareItem(value, month, extraInfo)
  );

  const onNextMonthClick = useCallback((): void => {
    const monthCopy = new Date(month.getTime());
    monthCopy.setMonth(monthCopy.getMonth() + 1);
    onChangeMonth(monthCopy);
  }, [onChangeMonth, month]);

  const onPrevMonthClick = useCallback((): void => {
    const monthCopy = new Date(month.getTime());
    monthCopy.setMonth(monthCopy.getMonth() - 1);
    onChangeMonth(monthCopy);
  }, [onChangeMonth, month]);

  const DayComponent: React.FC<DayProps<T>> =
    dayComponent || DefaultDayComponent;

  return (
    <StyledCard className={className} spacing="none" {...styleProps}>
      <Header
        isLoading={!!isLoading}
        month={month}
        monthTitleLength={monthTitleLength}
        onNextMonthClick={onNextMonthClick}
        onPrevMonthClick={onPrevMonthClick}
      />
      <Body>
        <Picker>
          <HideWhileLoading error={error} isLoading={isLoading}>
            <DayNames />
            <DayPicker columns={7}>
              {calendar.map(
                (dateProps: DayProps<T>): JSX.Element => (
                  <DayComponent
                    key={getExtraInfoKey(dateProps.date)}
                    {...dateProps}
                    onClick={onSelectDate.bind(null, dateProps.date)}
                  />
                )
              )}
            </DayPicker>
          </HideWhileLoading>
          {/*
            TODO: Implement this
            <MonthPicker />
            <YearPicker />
          */}
        </Picker>
      </Body>
    </StyledCard>
  );
};

Calendar.defaultTheme = calendarTheme;
