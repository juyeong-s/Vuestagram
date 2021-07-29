<template>
  <div>
      컨테이너에요
      <Post :post="posts[i]" v-for="(post,i) in posts" :key="i"/>
      <!-- <Post :data="data"/>
      <Post :data="data"/> -->
  </div>
</template>

<script>
import Post from './Post.vue';

export default {
    name : "Container",
    props : {
        posts : Array,
    },
    components : {
        Post : Post,
    }
}
</script>

<style>

</style>