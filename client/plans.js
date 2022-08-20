export default axios => ({
  getAllPlans: (parameters = {}) => {
    return axios.get('/plans/get-all')
  },
  getSinglePlan: (planId, parameters = {}) => {
    return axios.get(`/plans/get/${planId}`)
  }
})
