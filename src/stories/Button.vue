<template>
      <button class='btn'>{{ buttonText }}</button>
</template>

<script>
export default {
  name: "taxjar-button",
  data() {
    return {
      buttonText: "Button text"
    };
  }
};
</script>

<style lang='scss'>
.btn {
  border-radius: 3px;
  height: 40px;
  font-size: 14px;
  .btn__primary {
    background-color: red;
  }
}
</style>
