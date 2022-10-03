<template>
  <div>
    <form action="">
      <div>
        <select
          id=""
          v-model="selectedCountry"
          class="select d-flex flex-column"
          name=""
        >
          <option
            v-for="country in countries"
            :key="country._id"
            :value="country._id"
          >
            {{ country.name }}
          </option>
        </select>
        <select v-if="cities.length > 0" v-model="selectedCity" class="select">
          <option v-for="city in cities" :key="city._id" :value="city._id">
            {{ city.name }}
          </option>
        </select>
        <select v-model="selectedDistrict" class="select">
          <option
            v-for="district in districts"
            :key="district.id"
            :value="district._id"
          >
            {{ district.name }}
          </option>
        </select>
      </div>
      <div>
        <textarea
          id=""
          v-model="primaryAddress"
          style="border: 1px solid black"
          name=""
          cols="30"
          rows="10"
        />
        <textarea
          id=""
          v-model="secondaryAddress"
          style="border: 1px solid black"
          name=""
          cols="30"
          rows="10"
        />
      </div>
      <Notification v-if="message" style="width: 500px" :message="message" />
    </form>
    <button class="btn btn-danger" @click="createAddress()">
      Save address
    </button>
  </div>
</template>

<script>
import Notification from '../../Notification.vue'
export default {
  name: 'AddressForm',
  components: { Notification },
  data () {
    return {
      countries: [],
      cities: [],
      districts: [],
      selectedCountry: '',
      selectedCity: '',
      selectedDistrict: '',
      primaryAddress: '',
      secondaryAddress: '',
      message: '',
      response: null
    }
  },
  watch: {
    selectedCountry () {
      this.getCitiesWithCountry(this.selectedCountry)
    },
    selectedCity () {
      this.getDistrictWithCity(this.selectedCity)
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
        this.cities = res.data.data.cities
      })
    },
    getDistrictWithCity (id) {
      this.$API.addresses.getDistrictWithCity(id).then((res) => {
        this.districts = res.data.data.districts
      })
    },
    createAddress () {
      try {
        const address = {
          country: this.selectedCountry,
          city: this.selectedCity,
          district: this.selectedDistrict,
          address_1: this.primaryAddress,
          address_2: this.secondaryAddress
        }
        this.$API.addresses
          .createAddress(address)
          .then(res => (this.message = res.data.data.message))
          .then((res) => {
            console.log(res)
            this.response = res
            console.log('this.response: ' + this.response)
          })

        // if (this.response.status === '400') {
        //   throw new Error('custom exception')
        // }
      } catch (error) {
        // this.message = error.error.message
        console.log('error:' + error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.select {
  border: 1px solid black;
}
</style>
