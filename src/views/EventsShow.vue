<template>
  <div class="events-show">
    <p>display_name{{ event.display_name }}</p>
    <p>location: {{ event.location }}</p>
  </div>
</template>

<style>
</style>

<script>
// what needs to happen for a show page?
// get data from the api
// based on the id in the url
// show that data to the user
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Welcome to to the show!",
      event: {}
    };
  },
  created: function() {
    console.log('')
    axios.get(`/api/events/${this.$route.params.id}`).then(response => {
      console.log(response.data)
      this.event = response.data;
    })
  },
  methods: {}
};
</script>