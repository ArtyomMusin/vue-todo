<template>
  <div class="main">
    <h1 class="title">This is "to do" on Vue for mini-practice</h1>
  </div>
</template>

<script>
export default {
  name: "Main"
}
</script>

<style scoped>
  .main {
    display: flex;
    width: 100%;
    height: 100%;
    background-image: url('@/../public/vue.jpg');
  }
  .title {
    color: #41B783;
    position: absolute;
    right: 10rem;
    top: 5rem;
  }
</style>