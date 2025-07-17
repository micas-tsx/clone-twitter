import express, { urlencoded } from 'express'
import cors from 'cors'
import helmet from 'helmet'

const server = express()

server.use(helmet())
server.use(cors())
server.use(urlencoded({ extended: true }))
server.use(express.json())

// rotas

server.listen(process.env.PORT || 3001,  () => {
  console.log(`servidor rodando em ${process.env.BASE_URL}`)
})