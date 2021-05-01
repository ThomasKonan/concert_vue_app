<template>
  <div class="home">
    <h1>Setlists</h1>
    {{ setlists }}
    <div v-for="setlist in setlists">
      <h2>{{ }}</h2>

      <p>{{}}</p>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      setlists: [],
    };
  },
  created: function() {
    this.setlistsIndex();
  },
  methods: {
    setlistsIndex: function() {
      axios.get("/api/setlists").then(response => {
        console.log("setlists index", response);
        this.setlists = response.data;
      });
    },
  },
};
</script>