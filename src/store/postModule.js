export const postModule = {
    state: () => ({
        posts: [],
        postsIsLoading: true,
        selectedSort: '',
        searchContent: '',
        limit: 10,
        page: 1,
        totalPages: 0,
        loadedPages: [],
        sortOptions: [
            { value: 'title', name: 'By name' },
            { value: 'body', name: 'By content' }
        ]
    }),
    getters: {
        sortedPosts (state) {
            if (!state.selectedSort) return state.posts
            return [...state.posts].sort((post1, post2) => post1[state.selectedSort].toLowerCase().localeCompare(post2[state.selectedSort].toLowerCase()))
        },
        searchPosts (state, getters) {
            if (!state.searchContent) {
                return getters.sortedPosts
            }
            return getters.sortedPosts.filter(post => post.title.includes(state.searchContent))
        }
    },
    mutations: {
        setPostsIsLoading (state, payload) {
            state.postsIsLoading = payload
        },
        setPosts (state, payload) {
            if (state.posts.length) {
                state.posts = [...state.posts, ...payload]
            } else {
                state.posts = payload
            }
        },
        setSelectedSort (state, payload) {
            state.selectedSort = payload
        },
        setSearchContent (state, payload) {
            state.searchContent = payload
        },
        setLimit (state, payload) {
            state.limit = payload
        },
        setPage (state, payload) {
            if (payload > state.totalPages) return
            state.page = payload
            if (!state.loadedPages.includes(payload)) {
                state.loadedPages = [...state.loadedPages, payload]
            }
        },
        setTotalPages (state, payload) {
            state.totalPages = payload
        }
    },
    actions: {
        async fetchData ({ state }) {
            try {
                return new Promise(resolve => setTimeout(async () => {
                    resolve(await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${state.limit}&_page=${state.page}`))
                }, 500))
            } catch (e) {
                console.error(e)
            }
        },
        async getPosts ({ state, dispatch, commit }) {
            commit('setPostsIsLoading', true)
            const response = await dispatch('fetchData')
            commit('setPosts', await response.json())
            commit('setTotalPages', Math.ceil(response.headers.get('x-total-count') / state.limit))
            commit('setPage', 1)
            commit('setPostsIsLoading', false)

        },
        async loadMorePosts ({ state, commit, dispatch }) {
            if (state.loadedPages.includes(state.page + 1) || (state.page === state.totalPages && !state.postsIsLoading) || state.postsIsLoading) return
            commit('setPage', state.page + 1)
            const response = await dispatch('fetchData')
            commit('setPosts', await response.json())
        }
    },
    namespaced: true
}