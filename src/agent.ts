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

    streamText({
      model: anthropic('claude-sonnet-4-20250514'),
      messages: [{ role: 'user', content: 'Write a long poem.' }],
      abortSignal,
    })
  }
}
