import { Response } from "express";

export default (res: Response, status: number, message: string, data: any, error: string | undefined) => res.status(status).json(
    error ? { status, message, error } : { status, message, data },
  );
  