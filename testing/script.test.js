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
