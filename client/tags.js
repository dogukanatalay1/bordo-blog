export default axios => ({
  getAllTags: (parameters = {}) => {
    return axios.get('/tags/get-all')
  },
  getMostUsedTags: (count, parameters = {}) => {
    return axios.get(`/tags/get-all/most-used/${count}`)
  }
})
