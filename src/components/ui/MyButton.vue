<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'my-button'
  }
</script>

<style scoped>
  .btn {
    padding: 0.5rem 1rem;
    background: none;
    color: teal;
    border: 1px solid teal;
    transition: all .1s linear;
  }

  .btn:hover {
    cursor: pointer;
    box-shadow: inset 0 0 0.5rem rgba(0, 128, 128, 0.4);
  }

  .danger {
    border: 1px solid crimson;
    color: crimson;
  }
  .danger:hover {
    box-shadow: inset 0 0 0.5rem rgba(220, 20, 60, 0.4);
  }
</style>