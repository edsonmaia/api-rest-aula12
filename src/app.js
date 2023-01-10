import express from 'express'
import routes from './routes.js'

const app = express()

// indicar para o express ler body com json
app.use(express.json())

// usar o routes depois do app.use(express.json())
app.use(routes)

export default app
