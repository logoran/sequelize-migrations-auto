
'use strict';

const assert = require('assert');
const auto = require('../..');

var dbA = require('../helpers/modelsA');
var dbB = require('../helpers/modelsB');
var mA = auto.reverseModels(dbA.sequelize, dbA.sequelize.models);
var mB = auto.reverseModels(dbB.sequelize, dbB.sequelize.models);
var actions = auto.parseDifference(mA, mB);

describe('getMigration', () => {
  it ('', () => {
    let migration = auto.getMigration(actions);
    // console.log(migration);
  });
});