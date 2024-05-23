import asyncHandler from 'express-async-handler'
import {
  list_documents,
  create_document,
  get_document
} from '../services/documents.ts'

export const documents_list = asyncHandler(async (req, res, next) => {
  const documents = await list_documents(req, res, next)
  res.send(documents)
  next()
})

export const documents_create = asyncHandler(async (req, res, next) => {
  const document = await create_document(req, res, next)
  res.send(document)
  next()
})

export const documents_get = asyncHandler(async (req, res, next) => {
  const document = await get_document(req, res, next)
  res.send(document)
  next()
})
