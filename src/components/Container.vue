<template>
  <div>
      <div v-if="status2 == 0">
      <Post :filter_name="filter_name" :i="i" :post="posts[i]" v-for="(post,i) in posts" :key="i"/>
      </div>

      <div v-if="status2 == 1">
      <div :class="filter_name + ' upload-image'" :style="{ backgroundImage : 'url('+this.url+')' }"></div>
      <div class="filters">
            <FilterBox :nowurl="url" :filter_item="filter" v-for="(filter,i) in filterList" :key="i">
                <template v-slot:a>{{filter}}</template>
                <!-- <template v-slot:b>{{filter}}</template> -->
            </FilterBox>

      </div>
      </div>

      <div v-if="status2 == 2">
        <div :class="filter_name + ' upload-image'" :style="{ backgroundImage : 'url('+this.url+')' }"></div>
        <div class="write">
            <textarea @input="$emit('posttext',$event.target.value)" class="write-box">write!</textarea>
        </div>
      </div>
  </div>
</template>

<script>
import Post from './Post.vue';
import FilterBox from './FilterBox.vue';
import filterlist from '../assets/filter';

export default {
    name : "Container",
    data(){
        return {
            filterList : filterlist,
            filter_name : '',
        }
    },
    components : {
        Post : Post,
        FilterBox
    },
    props : {
        posts : Array,
        status2 : Number,
        file : Array,
        url : String,
    },
    mounted(){
        this.emitter.on('filter', (a)=>{           
            this.filter_name = a;
            // console.log(this.filter_name);
        })
    },
}
</script>

<style>
.upload-image{
    width: 100%;
    height: 400px;
    margin: 10px;
    background-color: skyblue;
    background-repeat: no-repeat;
    background-size: cover;
}
.filters{
    display: flex;
    overflow-x: scroll;
    margin: 5px;
}
.write-box{
    width: 100%;
    height: 100px;
    margin: 5px;
    border: 1px solid gray;
}

</style>