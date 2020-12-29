describe("Hello Moon", () => {
  const helloMoon = "Hello, Moon!";
  it("says hello moon", () => {
    expect(helloMoon).toEqual("Hello, Moon!");
  });
});

// import * as React from 'react'
// import { isSameDay, isSameMonth } from 'date-fns'

// import { Button, Card, CircleButton, createTheme, render } from '../'
// import { Calendar } from './calendar'

// import { generateCalendar, getFirstDayOfWeek } from './calendar.utilities'

// const theme = createTheme([Button, Calendar, Card, CircleButton])

// expect.extend({
//   toBeSameDayAs(received: Date, otherDate: Date): jest.CustomMatcherResult {
//     return {
//       pass: isSameDay(received, otherDate),
//       message: (): string => `expected ${otherDate}, but got ${received}`,
//     }
//   },
// })

// test('renders without crashing', (): void => {
//   const value = new Date(2019, 0, 1)
//   // eslint-disable-next-line @typescript-eslint/no-empty-function
//   const noop = (): void => {}
//   const { container } = render(<Calendar month={value} value={value} onChangeMonth={noop} onSelectDate={noop} />, {
//     theme,
//   })

//   expect(container).toBeDefined()
// })

// test('isSameDay compares dates', (): void => {
//   expect(isSameDay(new Date(2019, 0, 1), new Date(2019, 0, 1))).toBeTruthy()
//   expect(isSameDay(new Date(2019, 0, 1), new Date(2019, 0, 2))).toBeFalsy()
// })

// test('isSameMonth compares months', (): void => {
//   expect(isSameMonth(new Date(2019, 0, 1), new Date(2019, 0, 2))).toBeTruthy()
//   expect(isSameMonth(new Date(2019, 0, 1), new Date(2019, 1, 2))).toBeFalsy()
// })

// test.each([
//   // [<a date in the week>, <expected date of monday>]
//   // First week in 2019
//   [new Date(2018, 11, 31), new Date(2018, 11, 31)],
//   [new Date(2019, 0, 1), new Date(2018, 11, 31)],
//   [new Date(2019, 0, 6), new Date(2018, 11, 31)],
//   // Second week in 2019
//   [new Date(2019, 0, 7), new Date(2019, 0, 7)],
//   [new Date(2019, 0, 9), new Date(2019, 0, 7)],
//   [new Date(2019, 0, 13), new Date(2019, 0, 7)],
//   // First week of septemer 2019
//   [new Date(2019, 7, 26), new Date(2019, 7, 26)],
//   [new Date(2019, 7, 28), new Date(2019, 7, 26)],
//   [new Date(2019, 8, 1), new Date(2019, 7, 26)],
//   // Week in middle of september 2019
//   [new Date(2019, 8, 16), new Date(2019, 8, 16)],
//   [new Date(2019, 8, 18), new Date(2019, 8, 16)],
//   [new Date(2019, 8, 22), new Date(2019, 8, 16)],
//   // Last week in september
//   [new Date(2019, 8, 30), new Date(2019, 8, 30)],
//   [new Date(2019, 9, 3), new Date(2019, 8, 30)],
//   [new Date(2019, 9, 6), new Date(2019, 8, 30)],
// ])('first weekday of %s should be %s', (date: Date, expectedDate: Date): void => {
//   expect(getFirstDayOfWeek(date)).toBeSameDayAs(expectedDate)
// })

// test('Generate a whole month (septemember 2019)', (): void => {
//   const firstOfSeptember = new Date(2019, 8, 1)
//   const dates = Array.from(generateCalendar(firstOfSeptember))

//   expect(dates[0]).toBeSameDayAs(new Date(2019, 7, 26)) // First day of calendar
//   expect(dates[14]).toBeSameDayAs(new Date(2019, 8, 9)) // Day in the middle
//   expect(dates[dates.length - 1]).toBeSameDayAs(new Date(2019, 9, 6)) // last day of calendar
//   expect(dates.length).toBe(42)
// })
