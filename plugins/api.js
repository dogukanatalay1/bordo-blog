import Events from '~/client/events'

export default (context, inject) => {
  const factories = {
    events: Events(context.$axios)
  }

  // Inject $API
  inject('API', factories)
}
