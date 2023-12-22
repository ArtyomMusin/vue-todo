<template>
  <div>
    <h1 class="title">To do</h1>
    <div class="btns">
      <my-button @click="showModal" class="create-btn">Create task</my-button>
      <my-input :model-value="searchContent" @update:model-value="setSearchContent" placeholder="Search by title..." class="search-input" />
      <my-select :model-value="selectedSort" @update:model-value="setSelectedSort" :options="sortOptions"/>
    </div>
    <my-modal v-model:show="modalVisible">
      <post-form @create="createPost"/>
    </my-modal>
    <post-list v-if="!postsIsLoading" :posts="searchPosts" @remove="removePost"/>
    <h3 v-else style="text-align: center">Loading posts...</h3>
    <div v-intersection="loadMorePosts" class="observer" :class="{ _active: page < totalPages && !postsIsLoading }">Loading...</div>
  </div>
</template>

<script>
import PostList from '@/components/PostList'
import PostForm from '@/components/PostForm'
import MyButton from '@/components/ui/MyButton'
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'TaskList',
  components: {
    MyButton,
    PostList, PostForm
  },
  data () {
    return {
      modalVisible: false
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchContent: 'post/setSearchContent',
      setSelectedSort: 'post/setSelectedSort'
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      getPosts: 'post/getPosts'
    }),
    createPost (post) {
      this.posts.push(post)
      this.modalVisible = false
    },
    removePost (post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showModal () {
      this.modalVisible = true
    }
  },
  mounted () {
    this.getPosts()
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      postsIsLoading: state => state.post.postsIsLoading,
      selectedSort: state => state.post.selectedSort,
      searchContent: state => state.post.searchContent,
      limit: state => state.post.limit,
      page: state => state.post.page,
      totalPages: state => state.post.totalPages,
      loadedPages: state => state.post.loadedPages,
      sortOptions: state => state.post.sortOptions
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      searchPosts: 'post/searchPosts'
    })
  }
}
</script>

<style>
  .btns{
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  .create-btn {
    white-space: nowrap;
  }
  .observer {
    color: teal;
    text-align: center;
    opacity: 0;
  }
  .observer._active {
    opacity: 1;
  }
</style>
