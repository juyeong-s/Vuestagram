<template>
  <div class="post">
      <div class="post-header">
          <!-- 프로필 사진 -->
          <div class="profile" :style="{ backgroundImage : 'url('+post.userImage+')' }">

          </div>
          <span class="profile-name">{{post.name}}</span>
      </div>
        <!-- 포스팅 사진 -->
      <div @click="$store.commit('like',i)" :class="filter_name + ' post-body'" :style="{ backgroundImage : 'url('+post.postImage+')' }">
          <!-- {{post.postImage}} -->
      </div>

      <div class="post-content">
          <p>좋아요 {{ $store.state.likes[i] }}개</p>
          <p><strong>{{post.name}}</strong></p>
          <p>{{post.content}}</p>
          <p class="date">{{post.date}}</p>
      </div>
  </div>

</template>

<script>
export default {
    name : "Post",
    // data(){
    //     return {
    //         filter_name : '',
    //     }      
    // },
    props :{
        post : Object,
        filter_name : String,
        i : Number,
    },
    // mounted(){
    //     this.emitter.on('filter', (a)=>{           
    //         this.filter_name = a;
    //         console.log(this.filter_name);
    //     })
    // },

}
</script>

<style>
.post{
    width: 100%;
}
.profile {
    /* background-image: url('https://placeimg.com/100/100/arch'); */
    width: 30px;
    height: 30px;
    background-size: 100%;
    border-radius: 50%;
    float: left;
}
.profile-name{
    display: block;
    float: left;
    padding-left: 10px;
    padding-top: 7px;
    font-size: 14px;
}
.post-header{
    height: 30px;
    padding: 10px;
}
.post-body{
    /* background-image: url('https://placeimg.com/640/480/animals'); */
    height: 450px;
    background-position: center;
    background-size: cover;
}
.post-content{
    padding-left: 15px;
    padding-right: 15px;
    font-size: 14px;
}
.date{
    font-size: 11px;
    color: gray;
    margin-top: -8px;
}

</style>