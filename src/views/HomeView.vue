<template>
  <div class="home">
    <Header></Header>
    <template>
      <div v-for="trip in trips.data" :key="trips.id">
        {{ trip.name }}
      </div>
    </template> 
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import { getTrips } from '../services/trip'

export default {
    name: "HomeView",
    components: {
      Footer,
      Header
    },
    data() {
        return {
          trips: []    
        }
    },
    async created() {
      const trips = await getTrips();
      this.trips = trips;
      console.log(this.trips);
  },
}  
</script>

<style>

</style>
