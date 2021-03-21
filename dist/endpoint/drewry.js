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
exports.execute = exports.NAME = void 0;
const external_adapter_1 = require("@chainlink/external-adapter");
exports.NAME = 'as2network';
const customError = (data) => data.Response === 'Error';
// @note - Only the Global Index is available as a 'Route' for now
// Furthter Routes to be established later
const customParams = {
    base: ['base', 'from', 'route'],
    quote: ['quote', 'to', 'market'],
};
exports.execute = (request, config) => __awaiter(void 0, void 0, void 0, function* () {
    const validator = new external_adapter_1.Validator(request, customParams);
    if (validator.error)
        throw validator.error;
    const jobRunID = validator.validated.id;
    const base = validator.validated.data.base;
    const quote = validator.validated.data.quote;
    const url = `price`;
    const params = {
        base,
        quote,
    };
    const reqConfig = Object.assign(Object.assign({}, config.api), { params, url });
    const response = yield external_adapter_1.Requester.request(reqConfig, customError);
    const result = external_adapter_1.Requester.validateResultNumber(response.data, ['price']);
    return external_adapter_1.Requester.success(jobRunID, {
        data: { result },
        result,
        status: 200,
    });
});
