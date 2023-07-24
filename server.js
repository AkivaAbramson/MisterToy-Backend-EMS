import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import path from 'path'

import { logger } from './services/logger.service.js'

const app = express()

const corsOptions = {
  origin: ['http://127.0.0.1:5174',
   'http://localhost:5174',
   'http://127.0.0.1:3000',
   'http://localhost:3000'],
  credentials: true,
  
  }
  // Express App Configuration:
  app.use(cors(corsOptions))
  app.use(express.json())
  app.use(cookieParser())
  app.use(express.static('public'))

const port = process.env.PORT || 3030

import { toyRoutes } from './api/toy/toy.routes.js'
import { authRoutes } from './api/auth/auth.routes.js'
import { userRoutes } from './api/user/user.routes.js'

//routes
app.use('/api/toy', toyRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)

// LIST
// app.get('/api/toy', (req, res) => {
//   const filterBy = req.query

//   toyService
//     .query(filterBy)
//     .then((toys) => res.send(toys))
//     .catch((err) => {
//       logger.error('Cannot get toy', err)
//       res.status(400).send('Cannot get toy')
//     })
// })

// CREATE
// app.post('/api/toy', (req, res) => {
//   const toy = req.body

//   toyService
//     .save(toy)
//     .then((savedToy) => res.send(savedToy))
//     .catch((err) => {
//       logger.error('Cannot save toy', err)
//       res.status(400).send('Cannot save toy')
//     })
// })

// UPDATE
// app.put('/api/toy/:toyId', (req, res) => {
//   const toy = req.body

//   toyService
//     .save(toy)
//     .then((savedToy) => res.send(savedToy))
//     .catch((err) => {
//       logger.error('Cannot save toy', err)
//       res.status(400).send('Cannot save toy')
//     })
// })

// READ
// app.get('/api/toy/:toyId', (req, res) => {
//   const { toyId } = req.params

//   toyService
//     .get(toyId)
//     .then((toy) => res.send(toy))
//     .catch((err) => {
//       logger.error('Cannot get toys', err)
//       res.status(400).send('Cannot get toys')
//     })
// })

// app.delete('/api/toy/:toyId', (req, res) => {
//   const { toyId } = req.params

//   toyService
//     .remove(toyId)
//     .then(() => res.send('Removed!'))
//     .catch((err) => {
//       logger.error('Cannot remove toy', err)
//       res.status(400).send('Cannot remove toy')
//     })
// })

app.get('/**', (req, res) => {
  res.sendFile(path.resolve('public/index.html'))
})

app.listen(port, () =>
  logger.info(`Server listening on port http://127.0.0.1:${port}/`)
)
