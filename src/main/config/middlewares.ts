import { Express } from 'express'
import { bodyParser } from '../config/middlewares/body-parser'
import { cors } from '../config/middlewares/cors'

export default (app: Express): void => {
  app.use(bodyParser)
  app.use(cors)
}
