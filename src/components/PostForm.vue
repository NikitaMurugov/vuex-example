<template>
    <form >
        <input type="text" name="" id="" placeholder="title" v-model="title">
        <input type="text" name="" id="" placeholder="body" v-model="body">
        <button type="button" value="" v-on:click.prevent="submit"> Create post </button>
        <hr />
    </form>
</template>

<script>
    import { mapMutations } from 'vuex';

    export default {
        data() {
            return {
                title: "",
                body: "",
            }
        },
        methods: {
            ...mapMutations(['createPost']),
            submit() {
                this.createPost({
                    title: this.title,
                    body: this.body,
                    id: Date.now(),
                });
                this.title = '';
                this.body = '';
            }
        } 
    }
</script>

<style scoped>
    input {
        display: block;
        width: 100%;
        margin: 10px 0;
    }
</style>