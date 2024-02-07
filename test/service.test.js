import './../src/types.js'

import { describe, it } from 'node:test'
import { parseUser } from '../src/service.js'
import assert from 'node:assert'
describe('Service', () => {
    it('should parse user', () => {
        /** @type {IncomingUser} */
        const user = {
            email: 'e@e.com',
            name: 'erick',
            password: '123123'
        }


        const result = parseUser(user)
        assert.deepStrictEqual(result, {
            name: user.name.toUpperCase(),
            email: user.email
        })
    })
})