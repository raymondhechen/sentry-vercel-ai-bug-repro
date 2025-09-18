import { anthropic } from '@ai-sdk/anthropic'
import { streamText } from 'ai'

export class Agent {
  abortController = new AbortController()

  abort() {
    console.log('Aborting')
    this.abortController.abort()
    this.abortController = new AbortController()
  }

  async generate(id: string) {
    // capture abort signal early for when abort() is called and replaces this.abortController with a new one
    const abortSignal = this.abortController.signal

    abortSignal.onabort = () => {
      console.log('Abort signal aborted', id)
    }

    console.log(`Generating ${id}`)

    const res = streamText({
      model: anthropic('claude-sonnet-4-20250514'),
      tools: {},
      messages: [{ role: 'user', content: 'Write a long poem.' }],
      abortSignal,
      onError: (error) => {
        console.log(error)
      },
    })
  }
}

export const reproRouter = async (req: Request, res: Response) => {
  const agent = new Agent()
  agent.generate('1')
  await new Promise((resolve) => setTimeout(resolve, 1000))
  agent.abort()
  await agent.generate('2')
}
