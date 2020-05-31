'use strict'

const User = use('App/Models/User')

class UserController {
    async store({request, response}){
        const data = request.only(['name', 'email','password','password_confirmation'])

        delete data.password_confirmation

        const user = await User.create(data)

        return response.status(201).json(user)
    }
}

module.exports = UserController
