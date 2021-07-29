<template>
  <div :class="filter_item + ' filter-item'" :style="{backgroundImage : 'url('+nowurl+')'}">
      <slot :msg="msg" name="a"></slot>
       <!-- <slot name="b"></slot> -->
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
    }
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