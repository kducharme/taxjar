<template>
      <button class='btn'>{{ buttonText }}</button>
</template>

<script>
export default {
  name: "tj-button",
  data() {
    return {
      buttonText: "Button text"
    };
  }
};
</script>

<style lang='scss'>
@import "../styles/variables";

.btn {
  font-size: 14px;
  font-weight: 600;
  padding: 0 12px;
  height: 40px;
  min-width: 80px;
  border-radius: 3px;
  border: none;
}
.btn:hover {
  cursor: pointer;
}
.btn__primary {
  color: white;
  background-color: $colorPurple;
}
.btn__secondary {
  color: white;
  background-color: $colorPurple;
}
</style>
