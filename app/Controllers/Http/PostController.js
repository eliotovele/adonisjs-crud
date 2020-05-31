'use strict'

const Post = use('App/Models/Post')

class PostController {
  async index() {
    const posts = await Post.all()

    return posts
  }

  async store({ request, response, auth }) {
    const data = request.only(['title', 'description', 'author', 'user_id'])

    const post = await Post.create({
      user_id: auth.user.id,
      author: auth.user.name,
      ...data
    })

    return response.status(201).json(post)
  }

  async show({ params }) {
    const post = await Post.findOrFail(params.id)

    return post
  }

  async update({ params, request }) {
    const data = request.only(['title', 'description'])

    const post = await Post.findOrFail(params.id)

    post.merge(data)

    await post.merge

    return post
  }

  async destroy({ params }) {
    const post = await Post.findOrFail(params.id)

    await post.delete()
  }
}

module.exports = PostController
