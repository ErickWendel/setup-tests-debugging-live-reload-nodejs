import './types.js'
/**
 * @param {IncomingUser} user
 * @returns {OutcomingUser}
 * */
function parseUser(user) {
    /** @type {OutcomingUser} */
    const result = {
        email: user.email,
        name: user.name.toUpperCase()
    }

    return result

}

export { parseUser }