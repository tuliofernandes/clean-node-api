import { Express } from 'express'
import { bodyParser } from '../config/middlewares/body-parser'

export default (app: Express): void => {
  app.use(bodyParser)
}
