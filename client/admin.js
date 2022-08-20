export default axios => ({
  adminGetAllUsers: (parameters = {}) => {
    return axios.get('/admin/users/get-all')
  }
})
