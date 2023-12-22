<template>
  <div v-if="posts.length > 0" class="PostList">
    <h3 class="PostList__Title">Task list</h3>
    <transition-group name="post-list">
      <post v-for="post in posts" :post="post" :key="post.id" @remove="removePost"></post>
    </transition-group>
  </div>
  <h3 v-else style="text-align: center">List is empty</h3>
</template>

<script>
  import Post from '@/components/Post'

  export default {
    components: {
      Post
    },
    props: {
      posts: {
        type: Array,
        required: true
      }
    },
    methods: {
      removePost (removedPost) {
        this.$emit('remove', removedPost)
      }
    }
  }
</script>

<style scoped>
  .PostList__Title{
    color: teal;
    margin-bottom: 0.6rem;
    text-align: center;
  }
  .post-list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .post-list-enter-active, .post-list-leave-active {
    transition: all 0.4s;
  }
  .post-list-enter, .post-list-leave-to /* .post-list-leave-active до версии 2.1.8 */ {
    opacity: 0;
    transform: translateX(130px);
  }
  .post-list-move {
    transition: transform 1s;
  }
</style>