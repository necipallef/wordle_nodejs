import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import { getWordByDate, isWordExist } from './service/wordService'

export const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.get('/word', (req, res) => {
  const todaysWord = getWordByDate(new Date())
  res.send({ word: todaysWord })
})

server.get('/check-word', (req, res) => {
  const word = (req.query.word || '') as string
  const exists = isWordExist(word)
  res.send({ exists })
})

server.post('/session', (req, res) => {
    if (req.body.username === 'sueda' && req.body.password === '123456') {
        res.send('ok')
    } else {
        res.status(401).end()
    }
})
