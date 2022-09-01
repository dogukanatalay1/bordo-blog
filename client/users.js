export default axios => ({
  sendEmailForPasswordReset: (parameters = {}) => {
    return axios.post('/users/get-password-reset-email', { ...parameters })
  }
})
