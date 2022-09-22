export default axios => ({
  getAllCountries: (parameters = {}) => {
    return axios.get('/addresses/get-all/country')
  },
  getCitiesWithCountry: (countryId, parameters = {}) => {
    return axios.get(`/addresses/get-all/city/${countryId}`)
  },
  getDistrictWithCity: (cityId, parameters = {}) => {
    return axios.get(`/addresses/get-all/district/${cityId}`)
  }
})
