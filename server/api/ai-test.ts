export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const query = body.query

  const ai = hubAI() // access AI bindings
  return await ai.run('@cf/meta/llama-3.1-8b-instruct', {
    prompt: query
  })
})