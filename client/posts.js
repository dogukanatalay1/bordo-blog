export default axios => ({
  getPosts: (parameters = {}) => {
    return axios.get('posts/', {
      ...parameters
    })
  },
  getSinglePost: (postId, parameters = {}) => {
    return axios.get(`posts/${postId}`)
  }
})
