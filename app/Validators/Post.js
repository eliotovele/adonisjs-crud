'use strict'

class User {
  get validateAll() {
    return true
  }

  get rules() {
    return {
      title: 'required|unique:posts',
      description: 'required|min:10'
    }
  }

  get messages() {
    return {
      'title.required': 'You must insert a title.',
      'title.unique': 'Post already exists.',
      'description.required': 'You must insert an description.',
      'description.min': 'Description must be at least 10 caracters.'
    }
  }

  async fails(errorMessages) {
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = User
