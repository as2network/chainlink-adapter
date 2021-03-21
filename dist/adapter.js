"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeExecute = exports.execute = void 0;
const external_adapter_1 = require("@chainlink/external-adapter");
const config_1 = require("./config");
const endpoint_1 = require("./endpoint");
const inputParams = {
    endpoint: false,
};
exports.execute = (request, config) => __awaiter(void 0, void 0, void 0, function* () {
    const validator = new external_adapter_1.Validator(request, inputParams);
    if (validator.error)
        throw validator.error;
    external_adapter_1.Requester.logConfig(config);
    const jobRunID = validator.validated.id;
    const endpoint = validator.validated.data.endpoint || config_1.DEFAULT_ENDPOINT;
    switch (endpoint) {
        case endpoint_1.as2network.NAME: {
            return yield endpoint_1.as2network.execute(request, config);
        }
        default: {
            throw new external_adapter_1.AdapterError({
                jobRunID,
                message: `Endpoint ${endpoint} not supported.`,
                statusCode: 400,
            });
        }
    }
});
exports.makeExecute = (config) => {
    return (request) => __awaiter(void 0, void 0, void 0, function* () { return exports.execute(request, config || config_1.makeConfig()); });
};
