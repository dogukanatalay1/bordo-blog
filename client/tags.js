export default axios => ({
  getAllTags: (parameters = {}) => {
    return axios.get('/tags/get-all')
  }
})
