
'use strict';

const assert = require('assert');
const auto = require('../..');

var dbA = require('../helpers/modelsA');
var dbB = require('../helpers/modelsB');

describe('writeMigration', () => {
  it('', () => {
    let migration = auto.duplexMigration(dbA, dbB);
    auto.writeMigration(0, migration, __dirname);
  });
});