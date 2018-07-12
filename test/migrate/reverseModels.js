
'use strict';

const assert = require('assert');
const auto = require('../..');

var dbA = require('../helpers/modelsA');
var dbB = require('../helpers/modelsB');

describe('reverseModels', () => {
  it ('', () => {
    var mA = auto.reverseModels(dbA.sequelize, dbA.sequelize.models);
    //console.log(JSON.stringify(mA));
    var mB = auto.reverseModels(dbB.sequelize, dbB.sequelize.models);
    //console.log(JSON.stringify(mB));
  });
});