import { Express } from 'express'
import { bodyParser } from '../config/middlewares/body-parser'
import { cors } from '../config/middlewares/cors'
import { contentType } from '../config/middlewares/content-type'

export default (app: Express): void => {
  app.use(bodyParser)
  app.use(cors)
  app.use(contentType)
}
