const expect = require('expect');
const rewire = require('rewire');

const app = rewire('./app');

describe('App', () => {
  const db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);


  it('should call the spy coreectly', () => {
    const spy = expect.createSpy();
    spy('Chao', 32);
    expect(spy).toHaveBeenCalledWith('Chao', 32);
  });

  it('should call saveUser with user object', () => {
    const email = 'chao@gmai.com';
    const password = '123abc';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });
});
