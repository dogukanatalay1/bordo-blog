import Posts from '~/client/posts'

export default (context, inject) => {
  const factories = {
    posts: Posts(context.$axios)
  }

  // Inject $API
  inject('API', factories)
}
