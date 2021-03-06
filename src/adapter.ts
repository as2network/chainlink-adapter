import { Requester, Validator, AdapterError } from '@chainlink/external-adapter';
import { Config, ExecuteWithConfig, ExecuteFactory } from './types';
import { makeConfig, DEFAULT_ENDPOINT } from './config';
import { as2network } from './endpoint';

const inputParams = {
  endpoint: false,
};

export const execute: ExecuteWithConfig<Config> = async (request, config) => {
  const validator = new Validator(request, inputParams);
  if (validator.error) throw validator.error;

  Requester.logConfig(config);

  const jobRunID = validator.validated.id;
  const endpoint = validator.validated.data.endpoint || DEFAULT_ENDPOINT;

  switch (endpoint) {
    case as2network.NAME: {
      return await as2network.execute(request, config);
    }
    default: {
      throw new AdapterError({
        jobRunID,
        message: `Endpoint ${endpoint} not supported.`,
        statusCode: 400,
      });
    }
  }
};

export const makeExecute: ExecuteFactory<Config> = (config) => {
  return async (request) => execute(request, config || makeConfig());
};
