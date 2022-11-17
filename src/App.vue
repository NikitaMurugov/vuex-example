<template>
    <div id="app">
        <div class="posts">
            <div class="post" v-for="post in allPosts" v-bind:key="post.id">
                <h1>{{ post.title | clearStr }}</h1>
                <p>{{ post.body }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: "App",
        computed: mapGetters(["allPosts"]),
        methods: mapActions(['fetchPosts']),
        async mounted() {
            this.fetchPosts(4);
        },
        filters: {
            clearStr: function (str) {
              return str.slice(0, 10);
            }
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin: 60px auto;
        width: 700px;
    }
    .posts {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
    }
    .post {
        width: 100%;
        height: 200px;
        border-radius: 5px;
        border: 1px solid #d8d8d8;
    }
</style>
