import { Request, Response, NextFunction } from 'express'

export const contentType = (req: Request, res: Response, next: NextFunction): void => {
  console.log('contentType middleware')
  res.type('json')
  next()
}
