<template>
  <div @click="fire" :class="filter_item + ' filter-item'" :style="{backgroundImage : 'url('+nowurl+')'}">    
       <!-- <slot name="b"></slot> -->
      <slot :msg="msg" name="a"></slot>
    </div>
</template>

<script>
export default {
    name: 'FilterBox',
    props : {
        nowurl : String,
        filter_item : String,
    },
    data(){
        return{
            msg : 'hello'
        }
    },
    methods : {
        fire(){
            this.emitter.emit('filter',this.filter_item);
        }
    },
}
</script>

<style>
.filter-item{
    width: 200px;
    height: 200px;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color: white;
    background-size: cover;
    overflow: visible;
    /* overflow-y: hidden; */
}

</style>