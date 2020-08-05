const { searchInObject } = require("./src/functions/table-functions");


test('searchInObject test', () => {
  expect(searchInObject({})).toBe([])
} )