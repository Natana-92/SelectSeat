<template>
  <div>
    <AddCard class="w3-margin"/>
    <RandomSeating class="randomSeat" />
  </div>
</template>

<script>
import AddCard from "./SelectSeat/AddCard";
import RandomSeating from "./SelectSeat/RandomSeating";

export default {
  name: "StartSelectSeat",
  components: {
    AddCard,
    RandomSeating
  }
};
</script>

<style scoped>
.randomSeat {
  margin-top: 50px;
}

</style>