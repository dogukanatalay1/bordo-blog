export default axios => ({
  getUsersPost: (parameters = {}) => {
    return axios.get('/posts/get-all/my')
  },
  createPost: (parameters = {}) => {
    return axios.post('/posts/create', { ...parameters })
  }
})
