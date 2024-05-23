import asyncHandler from 'express-async-handler'
import { type Express } from 'express'

import {
  documents_list,
  documents_create,
  documents_get
} from '../controllers/documents.ts'

export const routes = (app: Express): void => {
  app.get(
    '/documents',
    asyncHandler(async (req, res, next) => {
      const data = await documents_list(req, res, next)
      res.send(data)
    })
  )

  app.post(
    '/documents',
    asyncHandler(async (req, res, next) => {
      const data = await documents_create(req, res, next)
      res.send(data)
    })
  )

  app.get(
    '/documents/:id',
    asyncHandler(async (req, res, next) => {
      const data = await documents_get(req, res, next)
      res.send(data)
    })
  )
}
