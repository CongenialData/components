declare namespace jest {
  // eslint-disable-next-line
  interface Matchers<R> {
    toBeSameDayAs(value: Date): CustomMatcherResult;
  }
}
