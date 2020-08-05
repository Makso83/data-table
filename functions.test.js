const { searchInObject } = require("./src/functions/table-functions")

let correctPhrase;
let inCorrectPhrase;
let correctObject;
let inCorrectObject;

beforeEach(() => {
  correctPhrase = 'aleX';
  inCorrectPhrase = 23;
  correctObject = [{
    name: 'ALEX',
    job: 'none',
    email: 'noname@gmail.ru'
  },
  {
    name: 'boris',
    job: 'none',
    email: 'noname@gmail.ru'
  },
];
  inCorrectObject = [{
    name: 'boris',
    job: 23,
    email: 'noname@gmail.ru'
  }];

})

test('searchInObject test', () => {
  expect(searchInObject(correctPhrase, [])).toStrictEqual([]);
  expect(searchInObject(correctPhrase, correctObject)).toHaveLength(1);
  expect(searchInObject(correctPhrase, inCorrectObject)).toHaveLength(0);
  expect(searchInObject(inCorrectPhrase, correctObject)).toHaveLength(0);
} )