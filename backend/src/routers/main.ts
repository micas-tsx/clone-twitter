import { Router } from 'express'
import * as pingController from '../controllers/ping'
import * as authController from '../controllers/auth'
import * as tweetController from '../controllers/tweet'
import { verifyJWT } from '../utils/jwt'

export const mainRouter = Router()

mainRouter.get('/ping', pingController.ping)
mainRouter.get('/privateping', verifyJWT, pingController.pivateping)


// rotas de login
mainRouter.post('/auth/signup',authController.signup) //rota de cadastro
mainRouter.post('/auth/signin', authController.signin) //rota de login

//fazer um tweet
mainRouter.post('/tweet', verifyJWT, tweetController.addTweet) // posta um tweet
mainRouter.get('/tweet/:id', verifyJWT, tweetController.getTweet) // pesquisa um tweet
/*
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