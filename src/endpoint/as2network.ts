import { Requester, Validator } from '@chainlink/external-adapter';
import { ExecuteWithConfig, Config } from '../types';

export const NAME = 'as2network';

const customError = (data: any) => data.Response === 'Error';

// @note - Only the Global Index is available as a 'Route' for now
// Furthter Routes to be established later
const customParams = {
  base: ['base', 'from', 'route'],
  quote: ['quote', 'to', 'market'],
};

export const execute: ExecuteWithConfig<Config> = async (request, config) => {
  const validator = new Validator(request, customParams);
  if (validator.error) throw validator.error;

  const jobRunID = validator.validated.id;
  const base = validator.validated.data.base;
  const quote = validator.validated.data.quote;
  const url = `price`;

  const params = {
    base,
    quote,
  };

  const reqConfig = { ...config.api, params, url };

  const response = await Requester.request(reqConfig, customError);
  const result = Requester.validateResultNumber(response.data, ['price']);

  return Requester.success(jobRunID, {
    data: { result },
    result,
    status: 200,
  });
};
