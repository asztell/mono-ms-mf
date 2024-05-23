import asyncHandler from 'express-async-handler'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const list_documents = asyncHandler(async (_req, res, next) => {
  try {
    const documents = await prisma.documents.findMany()
    res.send(documents)
    next()
  } catch (error) {
    res.status(500).send({ message: 'Error fetching documents' })
    next(error)
  }
})

export const create_document = asyncHandler(async (req, res, next) => {
  const { title, mimetype } = req.body
  try {
    const document = await prisma.documents.create({
      data: {
        title,
        mimetype
      }
    })
    console.log('document', document)
    res.send(document)
    next()
  } catch (error) {
    res.status(500).send({ message: 'Error creating document' })
    next(error)
  }
})

export const get_document = asyncHandler(async (req, res, next) => {
  const { id } = req.params
  try {
    const document = await prisma.documents.findUniqueOrThrow({
      where: {
        id: parseInt(id)
      }
    })
    res.send(document)
    next()
  } catch (error) {
    res.status(404).send({ message: `Document with id ${id} not found` })
    next(error)
  }
  // error instanceof Prisma.PrismaClientKnownRequestError
})
