const googleSeach = require('./script');

const dbMock = ['dog.com', 'cheesepuff.com', 'disney.com', 'dogpictures.com'];
it('this is a silly test', () => {
  expect('hello').toBe('hello');
  googleSeach('testtest', dbMock);
});

it('is searching google', () => {
  expect(googleSeach('testtest', dbMock)).toEqual([]);
  expect(googleSeach('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com']);
});

it('work with undefined and null input', () => {
  expect(googleSeach(undefined, dbMock)).toEqual([]);
  expect(googleSeach(null, dbMock)).toEqual([]);
});

it('does not return more then 3 matches', () => {
  expect(googleSeach('.com', dbMock).length).toEqual(3);
});
