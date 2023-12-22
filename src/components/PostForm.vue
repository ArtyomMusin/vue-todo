<template>
  <form @submit.prevent>
    <h4>Create task</h4>
    <my-input v-focus v-model="post.title" placeholder="Name"/>
    <my-input v-model="post.body" placeholder="Description"/>
    <my-button class="create-btn" @click="createPosts">Create</my-button>
  </form>
</template>

<script>
  export default {
    data () {
      return {
        post: {
          title: '',
          body: ''
        }
      }
    },
    methods: {
      createPosts () {
        this.post.id = Date.now()
        this.$emit('create', this.post)
        this.post = {
          title: '',
          body: ''
        }
      }
    }
  }
</script>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .create-btn {
    align-self: flex-end;
  }
</style>