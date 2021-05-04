<template>
  <div class="logout">
  </div>
</template>


<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "You have logged out"
    };
  },
  created: function() {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    this.$router.push("/");
  }
};
</script>