<template>
  <div class="App">
    <nav class="Nav">
      <router-link class="Nav__Item" to="/">Main</router-link>
      <router-link class="Nav__Item" to="/tasks">Tasks</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body, html, #app {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    width: 100%;
    height: 100%;
  }
  .App{
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    width: 100%;
    padding: 2rem;
  }
  .App > .title {
    text-align: center;
    color: teal;
  }
  .Nav {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  .Nav__Item {
    color: teal;
    text-decoration: none;
    font-size: 1.2rem;
  }
</style>
