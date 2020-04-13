<template>
  <div>
    <h1>이름을 입력한 후 Add Card를 클릭하여 카드를 추가하세요!</h1>
    <div class="inputForm">
      <input type="text" class="w3-input" />
      <button id="addCardBtn" v-on:click="addCard" class="w3-button w3-medium w3-right">AddCard</button>
    </div>
  </div>
</template>
<script>
import Vue from "vue"; // es6 syntax

var addCard = new Vue({
  el: "#addCardBtn",
  data: {},
  method: {
    addCard: function(event) {
      console.log(event);
      console.log("event!");
    }
  }
});

console.log(addCard);

export default {
  name: "AddCard",
  components: {}
};
</script>

<style scoped>
.inputForm {
  width: 20%;
}
</style>