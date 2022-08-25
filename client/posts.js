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
