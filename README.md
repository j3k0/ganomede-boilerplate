# ganomede-boilerplate

Clone or download, find all occurences of `REPLACE_THIS_WITH_YOUR_THING` and replace that with your thing :)

Included:

  - linter
  - test infrastructure (mocha, chai, testdouble, istanbul)
  - ping and about routers (with tests)
  - `src/server.js` with basic restify setup
  - `src/errors.js` with app-level error basics
  - `index.js` with basic clustering
  - docker support

# Extra setup

### Code coverage with coveralls.io

Add `COVERALLS_REPO_TOKEN` to Circle CI environment variables.

Add the below lines to the `circle.yml` file.

```yaml
test:
  post:
    - npm run coverage
    - npm install https://github.com/nickmerwin/node-coveralls
    - cat ./coverage/lcov.info | ./node_modules/.bin/coveralls
```

### Continuous integration with docker cloud

  - Adjust `docker-compose.test.yml`
  - Link docker cloud to the github repo
