import './types.js'

import { createServer } from 'node:http'
import { once } from 'node:events'

const server = createServer(async (request, response) => {
    /** @type {IncomingUser} */
    const user = JSON.parse(await once(request, 'data'))


    /** @type {OutcomingUser} */
    const result = {
        email: user.email,
        name: user.name.toUpperCase(),
    }
    return response.end(
        JSON.stringify(result)
    )
})

if (process.env.NODE_ENV !== 'test') {
    server.listen(3000, () => {
        console.log('Server listening on port 3000')
    })
}
export { server }