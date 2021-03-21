"use strict";
const ea_bootstrap_1 = require("@chainlink/ea-bootstrap");
const adapter_1 = require("./adapter");
const config_1 = require("./config");
const NAME = 'as2network';
module.exports = Object.assign({ NAME, makeExecute: adapter_1.makeExecute, makeConfig: config_1.makeConfig }, ea_bootstrap_1.expose(ea_bootstrap_1.util.wrapExecute(adapter_1.makeExecute())));
