import { Router } from 'express'

import sellers from './sellers'

const defaultRouter = Router()

defaultRouter.use('/sellers', sellers)

export default defaultRouter
