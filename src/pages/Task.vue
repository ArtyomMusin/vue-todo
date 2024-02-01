<template>
  <div v-if="!isLoading && post">
    <h1>Task with id {{ post.id }}</h1>
    <p>User id: {{ post.userId }}</p>
    <p>Title: {{ post.title }}</p>
    <p>Body: {{ post.body }}</p>
  </div>
  <div v-if="!isLoading && !post">No such task</div>
  <div v-else>Loading...</div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  name: "Task",
  data () {
    return {
      post: {},
      isLoading: true
    }
  },
  methods: {
    ...mapActions({
      fetchPostById: 'post/fetchPostById'
    }),
    ...mapMutations({
      setCurrentPost: 'post/setCurrentPost'
    }),
    async setPost () {
      this.isLoading = true
      const response = await this.fetchPostById()
      const data = await response.json()
      this.post = data[0]
      this.isLoading = false
    }
  },
  mounted () {
    this.setCurrentPost(this.$route.params.id)
    this.setPost()
  }
}
</script>

<style scoped>

</style>