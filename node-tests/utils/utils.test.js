const expect = require('expect');
const utils = require('./utils');


it('should add two numbers', () => {
  const res = utils.add(33, 11);

  expect(res).toBe(44).toBeA('number');
});

it('should async add two numbers', (done) => {
  utils.asyncAdd(4, 3, (sum) => {
    expect(sum).toBe(7).toBeA('number');
    done();
  });
});

it('should square a number', () => {
  const res = utils. square(4);

  expect(res).toBe(16).toBeA('number');
});

it('should async add two numbers', (done) => {
  utils.asyncSquare(4, (res) => {
    expect(res).toBe(16).toBeA('number');
    done();
  });
});

it('should set first name and last name', () => {
  let user = {location: 'New York', age: 32};
  const res = utils.setName(user, 'Chao Fan');

  expect(res).toInclude({
    firstName: 'Chao',
    lastName: 'Fan'
  });
});
