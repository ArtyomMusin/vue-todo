<template>
  <h1>Task with id={{ post.id }}</h1>
</template>

<script>
export default {
  name: "Task",
  data () {
    return {
      post: {}
    }
  },
  methods: {
    getPost () {
      const id = this.$route.params.id
      console.log(id)
    }
  },
  mounted () {
    this.getPost()
  }
}
</script>

<style scoped>

</style>