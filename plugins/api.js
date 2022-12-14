import Plans from '~/client/plans'
import Posts from '~/client/posts'
import Tags from '~/client/tags'
import Admin from '~/client/admin'
import Users from '~/client/users'
import Addresses from '~/client/addresses'

export default (context, inject) => {
  const factories = {
    tags: Tags(context.$axios),
    posts: Posts(context.$axios),
    admin: Admin(context.$axios),
    plans: Plans(context.$axios),
    users: Users(context.$axios),
    addresses: Addresses(context.$axios)
  }

  // Inject $API
  inject('API', factories)
}
