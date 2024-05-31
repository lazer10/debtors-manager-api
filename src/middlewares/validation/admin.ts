/* eslint-disable import/prefer-default-export */
import { Request, Response, NextFunction } from 'express';
import validator from '../../helpers/validator';
import adminLoginSchema from './schemas/admin/adminLogin';

export const adminLogin = (req: Request, res: Response, next: NextFunction) => (
  validator(adminLoginSchema, req.body, res, next)
);