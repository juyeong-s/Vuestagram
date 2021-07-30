import axios from 'axios'
import { createStore } from 'vuex'

const store = createStore({
    state (){
        return{
            name : 'kim',
            age : 20,
            likes : [30,30,30],
            likestate : [false,false,false],
            more : {},  //서버에서 더보기 게시물을 가져와 저장
        }
    },
    mutations : {   // state 수정방법 정의 하는 곳
        changeName(state){
            state.name = 'park'
        },
        changeAge(state, data){
            state.age += data
        },
        like(state,i){
            if(!state.likestate[i]){
                state.likestate[i] = true
                state.likes[i] += 1
            }               
            else{
                state.likestate[i] = false
                state.likes[i] -= 1
            }               
        },
        newlike(state){
            state.likes.unshift(0);
            console.log(state.likes);
            state.likestate.unshift(false);
        },        
    },
    actions : {
        getData(){
            axios.get('http://codingapple1.github.io/vue/more0.json')
            .then((a)=>{
                console.log(a.data);
            })
        },
    },
})

export default store;