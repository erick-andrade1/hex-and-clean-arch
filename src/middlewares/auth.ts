import { Request, Response, NextFunction } from 'express';
import { Errors, TokenProvider } from '../core';

export interface AuthenticatedRequest extends Request {
  userId: string;
}

export function auth(tokenProvider: TokenProvider) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json(Errors.UNAUTHORIZED);
    }

    try {
      const decoded = tokenProvider.verifyToken(token);
      if (!decoded) {
        return res.status(401).json(Errors.INVALID_TOKEN);
      }
      req['userId'] = decoded['userId'];
      next();
    } catch (error) {
      return res.status(500).json(Errors.INTERNAL_SERVER_ERROR);
    }
  };
}
