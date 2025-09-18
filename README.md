# Repro for abort console error with @sentry/node and vercel/ai

### Console Log

```
[Server] Running on port 8081
Generating 1
Aborting
Abort signal aborted 1
Generating 2
This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason:
AI_NoOutputGeneratedError: No output generated. Check the stream for errors.
    at Object.flush (/Users/raymondchen/dev/sentry-repro/node_modules/.pnpm/ai@5.0.46_zod@4.1.9/node_modules/ai/src/generate-text/stream-text.ts:856:27)
    at invokePromiseCallback (node:internal/webstreams/util:172:10)
    at Object.<anonymous> (node:internal/webstreams/util:177:23)
    at transformStreamDefaultSinkCloseAlgorithm (node:internal/webstreams/transformstream:621:43)
    at node:internal/webstreams/transformstream:379:11
    at writableStreamDefaultControllerProcessClose (node:internal/webstreams/writablestream:1162:28)
    at writableStreamDefaultControllerAdvanceQueueIfNeeded (node:internal/webstreams/writablestream:1251:5)
    at writableStreamDefaultControllerClose (node:internal/webstreams/writablestream:1218:3)
    at writableStreamClose (node:internal/webstreams/writablestream:722:3)
    at writableStreamDefaultWriterClose (node:internal/webstreams/writablestream:1091:10)
```
