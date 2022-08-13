export default axios => ({
  getUsersPost: (parameters = {}) => {
    return axios.get('/post/getAll/my')
  }
})
