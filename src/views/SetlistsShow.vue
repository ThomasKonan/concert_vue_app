<template>
  <div class="setlists-show">
    <p>display_name{{ setlist.display_name }}</p>
    <p>location: {{ setlist.location }}</p>
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
      setlist: {}
    };
  },
  created: function() {
    console.log('')
    axios.get(`/api/setlists/${this.$route.params.id}`).then(response => {
      console.log(response.data)
      this.results = response.data;
    })
  },
  methods: {}
};
</script>