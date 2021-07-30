<template>
<div style="padding:10px">
    <h4>팔로워</h4>
    <input @input="search($event.target.value)" placeholder="🔍" />
    <div class="post-header" v-for="(follow,i) in follower" :key="i">
        <div class="profile" :style="{backgroundImage : 'url('+follow.image+')'} "></div>
        <span class="profile-name">{{follow.name}}</span>
    </div>
</div>
</template>

<script>
// import { computed, onMounted, reactive, toRefs, ref, watch } from 'vue';
import axios from 'axios';
// import {useStore} from 'vuex';
import { onMounted, toRefs, ref } from 'vue';

export default {
    name : 'MyPage',
    props : {
        one : Number,
    },
    setup(props){    //컴포넌트를 만들기 전에 이거부터 실행해주세요
        let follower = ref([]);
        // let test = reactive({ name : 'kim'});
        // test;
        let { one } = toRefs(props);
        console.log(one.value);

        // watch(one, ()=>{
        //     // one이라는 데이터가 변경될 때마다 실행되는 코드
        // })

        // let 결과 = computed(()=>{
        //     return follower.value.length
        // })
        // console.log(결과.value);

        // let store = useStore();
        // console.log(store.state.name);
        // console.log(store.commit()) //mutations함수 동작
        // console.log(store.dispatch())   //actions함수동작    

        onMounted(()=>{
            axios.get('/follower.json').then((a)=>{
                follower.value = a.data;
            })
        }) 

        function search(str){
            console.log(follower.value[0].name)
            for(let i = 0; i<follower.value.length; i++){
                if(!follower.value[i].name.includes(str)){
                    follower.value.splice(i,1);
                    i--;
                }
            }
            
        }  
        return {follower, search}

    },
    data(){
        return {

        }
    }
}
</script>

<style scoped>

</style>