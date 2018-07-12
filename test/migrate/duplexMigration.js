
'use strict';

const assert = require('assert');
const auto = require('../..');

var dbA = require('../helpers/modelsA');
var dbB = require('../helpers/modelsB');

describe('duplexMigration', () => {
  it ('', () => {
    let migration = auto.duplexMigration(dbA, dbB);
    // console.log(migration);
  });
});