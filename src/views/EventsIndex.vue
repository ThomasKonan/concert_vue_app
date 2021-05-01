<template>
  <div class="events-index">
    <input type="text" v-model="search">
    <label for="cars">Choose a car:</label>

    <select v-model="searchType">
      <option value="Artist">Artist</option>
      <option value="Location">Location</option>
    </select>
    <button v-on:click="indexEvents">Search Artists</button>
      <li v-for="event in events" v-bind:key=""> -->
        <p>{{ event.display_name }}</p>
        <p>{{ event.location.city }} </p>
      </li>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      events: [],
      search: "",
      searchType: "",
    };
  },
  created: function() {
    console.log("Hello")
    // this.indexEvents();
  },
  methods: {
    indexEvents: function() {
      axios.get("/api/events?artist_name="+this.search+"&search_type="+this.searchType).then(response => {
        console.log("events index", response);
        this.events = response.data;
      });
    },
  },
};
</script>