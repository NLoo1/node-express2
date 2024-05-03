### Conceptual Exercise

Answer the following questions below:

- **What is a JWT?**

JSON Web Token. Used for authentication in Express.

- **What is the signature portion of the JWT? What does it do?**

The signature denotes the version of the header and payload, and is signed with the secret key. By default, the algorithm is HMAC-SHA256.

- **If a JWT is intercepted, can the attacker see what's inside the payload?**

Because the payload is only encoded and not encrypted, attackers can see the payload's content.

- **How can you implement authentication with a JWT? Describe how it works at a high level.**

By using a combination of bCrypt and JWT, credentials can be stored in a hashed format that is difficult to decrypt. After hashing or verifying credentials, a token is generated and returned, usually stored with the user. A token can keep a user logged in and contains basic info about them, such as if they have access to certain routes or are an administrator.

- **Compare and contrast unit, integration and end-to-end tests.**

- A unit test involves isolating a single function. Called by itself, that function should work using a unit test.

- Integration tests verify the "flow" of a program, ensuring all the functions work together smoothly and without error.

- End-to-end tests verify the program's functionality as a whole, ensuring the application runs smoothly from start to finish. This simulates a real user's experience.

- **What is a mock? What are some things you would mock?**

- A mock is mainly used in unit testing, and works as a substitute where a function may otherwise depend on another object or await an API response.

- Using mocks keeps testing reliant only on the program, rather than external data.

- If a function involves randomness, there is no guarantee a test will return exactly the results you want. Instead, a mock could be used to substitute as Math.random.

**- What is continuous integration?**

- Continuous integration involves frequent, small merges instead of large merges at the end of a development cycle. By merging smaller changes often, continuous integration can also help in running tests automatically, as opposed to the developer running tests manually. Should the tests pass, the build is deployed. Otherwise, the build is considered broken.

- Continuous Integration is used with tools such as Travis, Jenkins, Circle, and Buddy.

**- What is an environment variable and what are they used for?**

- Environment variables often contain sensitive data, like secret keys or credentials that enable a program to fully function. They are not usually pushed to a deployment, as their availability would impose a security risk.

- Typically, environment variables can be used to set Node's environment or provide login details for a PSQL database.

**- What is TDD? What are some benefits and drawbacks?**

- Test Driven Development involves creating tests first, then creating the minimum amount of code necessary to pass said tests. By defining clear expectations of input and output first, it becomes easier to define the function's logic.

- As tests pass, they should be expanded upon and more tests should be added.

- Rather than writing functions first, developers can ensure their functions cater to the tests (which can simulate a user experience), rather than the other way around.

- Once tests pass, the developer can easily refactor the program.

**- What is the value of using JSONSchema for validation?**

- JSONSchema ensures data is passed exactly as the developer intended. Bad data can cause errors or at worst crash the program and server entirely.

- Validation can also help the user understand how to best format or fix their data.

- The developer does not have to spend extra time trying to fix invalid data.

**- What are some ways to decide which code to test?**

- Ideally, all code should be tested. Realistically though, critical functions should be tested first. This includes anything that involves returning data or any database changes. Code that may not crash the program (like debug logs) can be excluded from testing entirely or labeled as lower priority.

- Prioritize code that aligns with program and user requirements, or content the user is expected to see. This can be done as an end-to-end test.

- Any code involving database queries should be tested for security flaws (i.e. SQL injection).

- Any code that is expecting user input. Input should be validated and processed efficiently without crashing.

- Any function with edge cases should be tested.

**- What does `RETURNING` do in SQL? When would you use it?**

When used with Express, `RETURNING` retrieves values from an SQL query that the program may need to store or return. This can be used when a SELECT statement selects several columns, but only some are needed for a return.

**- What are some differences between Web Sockets and HTTP?**

Websockets are a smaller protocol compared to HTTP that stays connected and often used to update the browser. Compared to websockets, HTTP is stateless and has a lot of headers.

**- Did you prefer using Flask over Express? Why or why not (there is no right answer here --- we want to see how you think about technology)?**

Overall, Express seems easier to use and deploy. Express enables custom error handling and several ways for the user to pass data (via queries, params, or JSON objects) that I did not have the opportunity to use in Flask. However, Flask allowed for easy integration of Python and JSON data into web pages.
