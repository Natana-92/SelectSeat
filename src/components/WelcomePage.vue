<template>
  <!-- First Parallax Image with Logo Text -->
  <div class="bgimg-1 w3-display-container w3-opacity-min centerDiv" id="home">
    <div class="w3-display-middle" style="white-space:nowrap;">
      <span class="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">
        <span class="w3-hide-small">자리배치 프로그램에 오신것을</span>환영합니다.
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomePage",
  components: {}
};
</script>

<style scoped>
/* Create a Parallax Effect */
.bgimg-1,
.bgimg-2,
.bgimg-3 {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.centerDiv {
  background-image: url("../assets/seat.jpg");
  min-height: 100%;
  height: 1000px;
  margin-top: 50px;
}

</style>