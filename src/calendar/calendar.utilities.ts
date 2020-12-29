import fp from "lodash/fp";
import i18n from "../config/i18n"; // TODO: Remove i18n dependency and allow user to define the text used as day names

/**
 * get the first day of the week containing given day
 *
 * @remarks This function assumes that the forst day of the week always is a monday
 *
 * @param date - Date which specifies the week
 * @returns the first date of the week
 */
export function getFirstDayOfWeek(date: Date): Date {
  const firstWeekday = new Date(date.getTime());
  firstWeekday.setDate(
    firstWeekday.getDate() - ((firstWeekday.getDay() + 6) % 7)
  );
  return firstWeekday;
}

/**
 * Generates all dates within a month, given a date within that month.
 *
 * @remarks
 * First date is the first monday, the first week of that month
 *
 * @param date - A date within the month
 */
export function* generateCalendar(date: Date): IterableIterator<Date> {
  const nrDays = 7 * 6; // 6 weeks
  let firstDay = new Date(date.getTime());
  firstDay.setDate(1); // Adjust to the first date of this month
  firstDay = getFirstDayOfWeek(firstDay);

  for (let day = 0; day < nrDays; day++) {
    const d = new Date(firstDay.getTime());
    d.setDate(d.getDate() + day);
    yield d;
  }
}

export const rawDayNames = [
  i18n.t("common:calendar.monday"),
  i18n.t("common:calendar.tuesday"),
  i18n.t("common:calendar.wednesday"),
  i18n.t("common:calendar.thursday"),
  i18n.t("common:calendar.friday"),
  i18n.t("common:calendar.saturday"),
  i18n.t("common:calendar.sunday"),
];

export const months = [
  i18n.t("common:calendar.january"),
  i18n.t("common:calendar.february"),
  i18n.t("common:calendar.march"),
  i18n.t("common:calendar.april"),
  i18n.t("common:calendar.may"),
  i18n.t("common:calendar.june"),
  i18n.t("common:calendar.july"),
  i18n.t("common:calendar.august"),
  i18n.t("common:calendar.september"),
  i18n.t("common:calendar.october"),
  i18n.t("common:calendar.november"),
  i18n.t("common:calendar.december"),
];

export const getShorteningFn = (length: number): ((str: string) => string) =>
  fp.flow(fp.take(length), fp.join(""));

export const getDayNames = (l?: number): string[] =>
  l ? rawDayNames.map(getShorteningFn(l)) : rawDayNames;

export const monthName = (d: Date, length?: number): string => {
  const m: string = months[d.getMonth()];
  return length ? getShorteningFn(length)(m) : m;
};
