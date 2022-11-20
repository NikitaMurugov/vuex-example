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
        },
        createPost(state, newPost) {
            state.posts.unshift(newPost);
        },
    },
    state: {
        posts: [],
    },
    getters: {
        validPosts(state) {
            return state.posts.filter(post => {
                return post.title && post.body;
            });
        },
        allPosts({ posts }) {
            return posts;
        },
        postsCount(state, { validPosts }) {
            return validPosts.length;
        },
    },
}