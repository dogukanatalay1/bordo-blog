export default axios => ({
  getUsersPost: (parameters = {}) => {
    return axios.get('/posts/get-all/my')
  },
  getSingleUsersPost: (postId, parameters = {}) => {
    return axios.get(`/posts/get/my/${postId}`)
  },
  getPreviewPosts: (parameters = {}) => {
    return axios.get('/posts/get-all/previews')
  },
  getSinglePreviewPost: (postId, parameters = {}) => {
    return axios.get(`/posts/get/preview/${postId}`)
  },
  /*
  Multipart requests combine one or more sets
  of data into a single body, separated by boundaries.
  You typically use these requests for file uploads and
  for transferring data of several types in a single request
  */
  createPost: (data, parameters = {}) => {
    return axios.post('/posts/create', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  deletePost: (postId, parameters = {}) => {
    return axios.delete(`/posts/delete/my/${postId}`)
  }
})
