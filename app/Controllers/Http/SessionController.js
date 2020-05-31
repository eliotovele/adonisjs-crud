'use strict'

class SessionController {
  async store({ request, response, auth }) {
    const { email, password } = request.all()

    try {
      const token = await auth.attempt(email, password)

      return token
    } catch (error) {
      return response.status(404).send('User not found')
    }
  }
}

module.exports = SessionController
