<template>
  <div>
    <form action="">
      <select id="" v-model="selectedCountry" class="select" name="">
        <option v-for="country in countries" :key="country._id">
          {{ country.name }}
        </option>
      </select>
      <select
        v-if="cities.length > 0"
        v-model="selectedCity"
        class="select"
        name=""
      >
        <option v-for="city in cities" :key="city._id">
          {{ city.name }}
        </option>
      </select>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddressForm',
  data () {
    return {
      countries: [],
      cities: [],
      districts: [],
      selectedCountry: '',
      selectedCity: ''
    }
  },
  watch: {
    selectedCountry () {
      const country = this.countries.find(
        country => country.name === this.selectedCountry
      )
      this.getCitiesWithCountry(country._id)
    },
    selectedCity () {
      const city = this.cities.find(city => city.name === this.selectedCity)
      this.getDistrictWithCity(city._id)
    }
  },
  created () {
    this.getAllCountries()
  },
  methods: {
    getAllCountries () {
      this.$API.addresses.getAllCountries().then((res) => {
        this.countries = res.data.data
      })
    },
    getCitiesWithCountry (id) {
      this.$API.addresses.getCitiesWithCountry(id).then((res) => {
        this.cities = res.data.data
      })
    },
    getDistrictWithCity (id) {
      this.$API.addresses.getDistrictWithCity(id).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.select {
  border: 1px solid black;
}
</style>
