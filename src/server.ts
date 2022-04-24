import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import { getWordByDate } from './service/wordService'

export const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.get('/word', (req, res) => {
  const todaysWord = getWordByDate(new Date())
  res.send({ word: todaysWord })
})
