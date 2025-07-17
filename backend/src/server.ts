import express, { urlencoded } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { mainRouter } from './routers/main'

const server = express()

server.use(helmet())
server.use(cors())
server.use(urlencoded({ extended: true }))
server.use(express.json())
server.use(mainRouter)

// rotas

server.listen(process.env.PORT || 3001,  () => {
  console.log(`servidor rodando em ${process.env.BASE_URL}`)
})
