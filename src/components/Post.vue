<template>
  <div class="post">
    <div class="post__info">
      <div><strong>ID:</strong> {{ post.id }}</div>
      <div><strong>Name:</strong> {{ post.title }}</div>
      <div><strong>Description:</strong> {{ post.body }}</div>
    </div>
    <div class="post__buttons">
      <my-button @click="this.$router.push(`/task/${post.id}`)">open</my-button>
      <my-button class="danger" @click="this.$emit('remove', post)">remove</my-button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      post: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>
  .post {
    display: flex;
    padding: 1rem;
    flex: 1 1 auto;
    border: 2px solid teal;
    margin-bottom: 1rem;
  }
  .post__info {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
  }
  .post__buttons {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

</style>