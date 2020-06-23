import { Request, Response } from 'express';

export type Middleware = (req: Request, res: Response, next?: Middleware) => void;
export type VerbFunc = (path: string, ...middleware: Middleware[]) => void;

interface PlugServer {
  get: VerbFunc;
  post: VerbFunc;
  patch: VerbFunc;
  delete: VerbFunc;
  use?: VerbFunc;
}

export default PlugServer;

export {
  Request,
  Response,
}
