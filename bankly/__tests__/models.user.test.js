// const request = require("supertest");
// const jwt = require("jsonwebtoken");

const db = require("../db");
const bcrypt = require("bcrypt");
const createToken = require("../helpers/createToken");

// tokens for our sample users
const tokens = {};

console.log(db)

// FIXES BUG 3
describe('user model', () => {

  beforeEach(async function() {
    async function _pwd(password) {
      return await bcrypt.hash(password, 1);
    }
  
    let sampleUsers = [
      ["u1", "fn1", "ln1", "email1", "phone1", await _pwd("pwd1"), false],
      ["u2", "fn2", "ln2", "email2", "phone2", await _pwd("pwd2"), false],
      ["u3", "fn3", "ln3", "email3", "phone3", await _pwd("pwd3"), true]
    ];
  
    for (let user of sampleUsers) {
      await db.query(
        `INSERT INTO users VALUES ($1, $2, $3, $4, $5, $6, $7)`,
        user
      );
      tokens[user[0]] = createToken(user[0], user[6]);
    }
  });

  it('should work for valid user', () => {
    const test = authenticate('u1', 'pwd1')
    expect(test).toEqual(expect.any(String));
  })

  it('should throw error for invalid username and password', () => {
    const test = authenticate('asdasdas', 'asdasdasda')
    expect(() => test()).toThrow()
  })

})

afterEach(async function() {
  await db.query("DELETE FROM users");
});

afterAll(function() {
  db.end();
});