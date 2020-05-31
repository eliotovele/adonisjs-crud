'use strict'

class User {
  get validateAll() {
    return true
  }

  get rules() {
    return {
      name: 'required',
      email: 'required|email|unique:users',
      password: 'required|min:6',
      password_confirmation: 'required_if:password|same:password'
    }
  }

  get messages() {
    return {
      'name.required': 'You must insert a name.',
      'email.required': 'You insert an email.',
      'email.email': 'Insert a valid email address.',
      'email.unique': 'Email alredy exists.',
      'password.required': 'Please choose password',
      'password_confirmation.required_if': 'Please re-enter password',
      'password_confirmation.same': 'Passwords do not match'
    }
  }

  async fails(errorMessages) {
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = User
