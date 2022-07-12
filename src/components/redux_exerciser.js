import { createStore } from "redux";

//1. 상태 초기값 설정하기
//2. 액션타입 선언
//3. 액션생성 함수 정의
//4. reducer정의
//5. 스토어 생성하기

//1. 리덕스에서 관리할 상태 정의
const initialState = {
    counter : 0,
    text : "",
    list : []
}

//2. 액션타입 선언
const INCREASE = "INCREASE"
const DECREASE = "DECREASE"
const CHANGE_TEXT = "CHANGE_TEXT"
const ADD_TO_LIST = "ADD_TO_LIST"

//3. 액션 생성함수 정의
function increase(){
    return{
        type:INCREASE
    }
}

const decrease = ()=>({type:DECREASE})
const changeText = (text)=>({
    type:CHANGE_TEXT,
    text
})
const addToList = (item)=>({
    type:ADD_TO_LIST,
    item
})

//4.reducer 만들기
function reducer(state=initialState,action){
    switch(action.type){
        case INCREASE : 
        return {
            ...state,
            counter: state.counter+1

        }
        case DECREASE : 
        return {
            ...state,
            counter: state.counter-1

        }
        case CHANGE_TEXT : 
        return {
            ...state,
            text: action.text

        }
        case ADD_TO_LIST : 
        return {
            ...state,
            list : state.list.concat(action.item)

        }
        default:
            return state;
    }
}

//5. 스토어 만들기
const store = createStore(reducer);
console.log(store.getState());

const listener = ()=>{
    const state = store.getState();
    console.log(state)
}

const unsubscribe = store.subscribe(listener);

//6. 액션 디스패치 해주기
store.dispatch(increase())
store.dispatch({
    type:INCREASE
})
store.dispatch(decrease())
store.dispatch(addToList({id:1, name: "멍멍이", age :2}))
store.dispatch(changeText('왈왈'))
