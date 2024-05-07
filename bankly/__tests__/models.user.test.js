const config = require("../config")
const db = require("../db");
const bcrypt = require("bcrypt");
const createToken = require("../helpers/createToken");
const {authenticate, register} = require('../models/user')

// tokens for our sample users
const tokens = {};

// FIXES BUG 3
describe('user model', () => {

  beforeEach(async function() {
    async function _pwd(password) {
      return await bcrypt.hash(password, 1);
    }
  
    let sampleUsers = [
      ["test1", "fn1", "ln1", "email1", "phone1", await _pwd("pwd1"), false],
      ["test2", "fn2", "ln2", "email2", "phone2", await _pwd("pwd2"), false],
      ["test3", "fn3", "ln3", "email3", "phone3", await _pwd("pwd3"), true]
    ];
  
    // register(sampleUsers[0])
    // register(sampleUsers[1])
    // register(sampleUsers[2])

    for (let user of sampleUsers) {
      await db.query(
        `INSERT INTO users VALUES ($1, $2, $3, $4, $5, $6, $7)`,
        user
      );
      tokens[user[0]] = createToken(user[0], user[6]);
    }
  });

  it('should work for valid user', async () => {
    const test = await authenticate('test1', "pwd1");
    // console.log(test);
    expect(test).toEqual(expect.any(Object));
});


  it('should throw error for invalid username and password', async () => {
    const test = await authenticate('asdasdas', 'asdasdasda')
    expect(() => test()).toThrow()
  })

})

afterEach(async function() {
  await db.query("DELETE FROM users");
});

afterAll(function() {
  db.end();
});