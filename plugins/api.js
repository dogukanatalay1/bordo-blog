import Posts from '~/client/posts'
import Tags from '~/client/tags'

export default (context, inject) => {
  const factories = {
    tags: Tags(context.$axios),
    posts: Posts(context.$axios)
  }

  // Inject $API
  inject('API', factories)
}
