import '../src/types.js'
import { describe, before, after, it } from 'node:test'
import assert from 'node:assert'

function waitForServerStatus(server) {
    return new Promise((resolve, reject) => {
        server.once('error', (err) => reject(err))
        server.once('listening', () => resolve())
    })
}

describe('API Workflow', () => {
    let _testServerAddress
    let _testServer

    before(async () => {
        const { server } = await import('../src/index.js')
        _testServer = server.listen();

        await waitForServerStatus(_testServer)


        const serverInfo = _testServer.address()
        _testServerAddress = `http://localhost:${serverInfo.port}`
    })
    after(done => {
        _testServer.close(done)
    })
    describe('POST /', () => {

        it('should return a user with uppercase name', async () => {
            /** @type {IncomingUser} */
            const user = {
                email: 'erick@erick.com',
                name: 'erick',
                password: '123'
            }

            /** @type {OutcomingUser} */
            const response = await (await fetch(_testServerAddress, {
                method: 'POST',
                body: JSON.stringify(user),
            })).json()

            assert.deepStrictEqual(response, {
                email: user.email,
                name: user.name.toUpperCase(),
            })
        })
    })
})
