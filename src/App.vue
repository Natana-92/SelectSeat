<template>
  <div id="app">
    <div class="w3-center" id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/selectSeat">Start</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import './plugin/w3.css';

export default {
  name: "app",
  components: {}
};
</script>