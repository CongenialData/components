// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CalendarOptionalStyleProps {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CalendarRequiredStyleProps {}

export interface DayProps<T> {
  date: Date;
  extraInfo?: T;
  isToday: boolean;
  isSelected: boolean;
  isCurrentMonth: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface CalendarComponentProps<T> {
  className?: string;

  /**
   * Number of letters to show in day title
   *
   * Defaults to 1 letter
   */
  dayTitleLength?: number;

  /**
   * Number of letters to show in month title
   *
   * Defaults to whole month
   */
  monthTitleLength?: number;

  /**
   * Selected date
   */
  value: Date;

  /**
   * Show this month in the view
   */
  month: Date;

  /**
   * Render calendar days with this renderProp
   */
  dayComponent?: React.FC<DayProps<T>>;

  /**
   * Called when month is changed
   */
  onChangeMonth: (month: Date) => void;

  /**
   * Called when user clicks on a date
   */
  onSelectDate: (date: Date) => void;

  /**
   * Show loading indicator or not
   */
  isLoading?: boolean;

  /**
   * arbitrary error message
   */
  error?: string;

  /**
   * Extra info to send for days
   */
  extraInfo?: { [keys: string]: T };
}

export interface CalendarProps<T>
  extends CalendarComponentProps<T>,
    Partial<CalendarRequiredStyleProps>,
    CalendarOptionalStyleProps {}
