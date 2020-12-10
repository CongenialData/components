module.exports = {
  setupFilesAfterEnv: [jest.mock('react-dom/test-utils', () => ({}))],
}
