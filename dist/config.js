"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeConfig = exports.DEFAULT_ENDPOINT = void 0;
const external_adapter_1 = require("@chainlink/external-adapter");
exports.DEFAULT_ENDPOINT = 'feed.as2.network';
exports.makeConfig = (prefix) => {
    const config = external_adapter_1.Requester.getDefaultConfig(prefix);
    config.api.baseURL = config.api.baseURL || 'http://localhost:18081';
    return config;
};
