import { Router } from 'express'
import * as pingController from '../controllers/ping'

export const mainRouter = Router()

mainRouter.get('/ping', pingController.ping)
//mainRouter.get('/privateping')

/*
// rotas de login
mainRouter.post('/auth/signup') //rota de cadastro
mainRouter.post('/auth/signin') //rota de login

//fazer um tweet
mainRouter.post('/tweet') // posta um tweet
mainRouter.get('/tweet/:id') // pesquisa um tweet
mainRouter.get('/tweet/:id/answers') // vê as respostas de um tweet
mainRouter.get('/tweet/:id/like') // toggle de like

// usuario
mainRouter.get('/user/:slug') // pesquisa de usuario
mainRouter.get('/user/:slug/tweets') // pesquisa de tweet de um usuario
mainRouter.post('/user/:slug/follow') // toggle de folow
mainRouter.put('/user') //editar usuario
mainRouter.put('/user/avatar') //editar usuario avatar
mainRouter.put('/user/cover')//editar usuario cover

// feed (nomes autoexplicativos doq fazem)
mainRouter.get('/feed')
mainRouter.get('/search')
mainRouter.get('/trending')
mainRouter.get('/suggestions')

*/