<template>
  <div class="header">
    <ul class="header-button-left">
      <li @click="status--;">Cancel</li>
    </ul>

    <ul class="header-button-right">
      <li v-if="status != 2" @click="status++;">Next</li>
      <li v-if="status == 2" @click="publish">Post</li>
    </ul>

    <img src="./assets/logo.png" class="logo" />
  </div>
  <h4>안녕 {{ $store.state.name }}</h4>
  <button @click="$store.commit('changeName')">버튼</button>

  <h4>내 나이 {{ $store.state.age }}</h4>
  <button @click="changeAge(10)">버튼</button>
  <p>{{ $store.state.more }}</p>
  <button @click="$store.dispatch('getData')">더보기버튼</button>

  <Container @posttext="content = $event" :posts="postdata" :status2="status" :file="fileList" :url="imgUrl"/>
  <button @click="more">더보기</button>

  <!-- <p>{{now2}}  {{카운터}}</p>
  <button @click="카운터++">버튼</button> -->
  <p>{{name}} {{age}}</p>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" multiple type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

  <!-- <div v-if="status === 0">내용0</div>
  <div v-if="status === 1">내용1</div>
  <div v-if="status === 2">내용2</div>
  <button @click="status = 0">버튼0</button>
  <button @click="status = 1">버튼1</button>
  <button @click="status = 2">버튼2</button>
  <div style="margin-top : 500px"></div> -->

</template>

<script>
import Container from './components/Container.vue';
import postdata from './assets/data';
import axios from 'axios'
import { mapMutations, mapState } from 'vuex'

export default {
  name: "App",
  data(){
    return{
      카운터 : 0,
      postdata : postdata,
      count : 0,
      status : 0,
      fileList : [],
      imgUrl : '',
      content : '',
      filter_name : '',
    }
  },
  computed : {
    name(){
      return this.$store.state.name
    },
    ...mapState(['name','age','likes']), // 가져오고싶은 state 적기
    ...mapState({작명:'name',})
  },
  methods :{
    ...mapMutations(['setMore','like','changeAge']),
    now(){
      return new Date();
    },
    more(){  
      console.log(this.count);
      // axios.post('URL', {name : 'kim' }).then().catch((err)=>{
      //   console.log(err);
      // })
      // 내가 원하는 데이터 전송가능
      axios.get('https://codingapple1.github.io/vue/more'+this.count+'.json')
      .then((result)=>{ // 해당 url로부터 얻어진 결과가 파라미터 result임
        // 요청 성공 시 실행할 코드
        // console.log(result.data);
        this.postdata.push(result.data);  // postdata 배열에 result.data 결과 하나 더 추가해서
                                          // 버튼 click 시마다, 하나의 게시물을 더 보여준다
      })
      this.count++;
    },
    upload(e){
      this.fileList = e.target.files; // 업로드한 파일이 다 담김
      // console.log(this.fileList[0]);
      this.imgUrl = URL.createObjectURL(this.fileList[0]);
      // console.log(url);
      this.status++;
    },
    publish(){
      // this.content = this.$emit('posttext', this.content);
      let mypost = {
        name : "Juyeong",
        userImage : "https://placeimg.com/640/480/arch",
        postImage : this.imgUrl,
        likes : 50,
        date: "Jun 30",
        liked : false,
        content : this.content,
        filter : this.filter_name,
      };
      this.postdata.unshift(mypost);  // 왼쪽의 array에 자료를 추가
      this.status = 0;
      this.$store.commit('newlike');
    },
  },
  mounted(){
    this.emitter.on('filter', (a)=>{ // 누가 이런 작명이벤트를 발사하면
      // 이 코드 실행해주세요
      // a는 이벤트 안에 들어있던 데이터임
      this.filter_name = a;
    });
  },
  components: {
    Container : Container,
  },
};
</script>

<style>

body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}

.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  text-align: center;
  background-color: bisque;
}
.inputfile {
  display: none;
}
</style>
