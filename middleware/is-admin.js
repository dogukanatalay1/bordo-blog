export default function ({
  store,

  redirect
}) {
  if (store.state.auth.user.data.roles[0].name === 'SUPERADMIN') {
    return redirect('/')
  }
}

// Middleware lets you define custom functions that can be run
// before rendering either a page or a group of pages (layout).
