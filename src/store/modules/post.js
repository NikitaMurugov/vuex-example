export default {
    actions: {
        async fetchPosts(ctx, limit = 3) {
            const response = await fetch("http://jsonplaceholder.typicode.com/posts?_limit="+limit)
                .then(response => response.json());
            
            ctx.commit('updatePosts', response);
        }
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts;
        }
    },
    state: {
        posts: [],
    },
    getters: {
        allPosts(state) {
            return state.posts;
        },
    },
}