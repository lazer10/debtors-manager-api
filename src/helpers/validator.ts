import { NextFunction, Response } from 'express';
import out from './response';
import 'joi';

export default (schema: any, toValidate: any, res: Response, next: NextFunction) => {
  const { error } = schema.validate(toValidate);
  return error
    ? out(res, 422, error.details[0].message, null, 'VALIDATION_ERROR')
    : next();
};
