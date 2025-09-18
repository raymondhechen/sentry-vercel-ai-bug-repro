import Sentry from '@sentry/node'
import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import { Agent } from './agent'

const port = 8081

const app = express()
  .use(cors())
  .use(express.json({ limit: '100mb' }))
  .use('/api', async (req, res) => {
    const agent = new Agent()
    agent.generate('1')
    await new Promise((resolve) => setTimeout(resolve, 1000))
    agent.abort()
    await agent.generate('2')
  })

// The error handler must be registered before any other error middleware and after all controllers
Sentry.setupExpressErrorHandler(app)

app.listen(port, () => {
  console.log(`[Server] Running on port ${port}`)
})
