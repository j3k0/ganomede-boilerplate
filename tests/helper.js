'use strict';

const td = require('testdouble');
const {expect} = require('chai');

td.print = (what) => {
  const message = td.explain(what).description;
  console.log('%s', message); // eslint-disable-line no-console
};

global.__ganomede_test = true;
global.td = td;
global.expect = expect;

afterEach(() => td.reset());
