//1. 초기상태 생성
const initialState = [
    // {
    //     id:1,
    //     text:"예시",
    //     done : fasle
    // }
]

//2. 액션타입 선언
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

//3. 액션생성 함수

let nextId = 1;
export const addTodo = text=>({
    type:ADD_TODO,
    todo:{
        id:nextId++,
        text : text,
        done : false
    }
})

export const toggleTodo = id=>({
    type:TOGGLE_TODO,
    id:id,
})


//4. reducer 작성
export default function todos(state=initialState,action){
    switch(action.type){
        case ADD_TODO:
            return state.concat(action.todo);
        case TOGGLE_TODO:
            return state.map((todo)=>todo.id === action.id ? {...todo,done:!todo.done} : todo);
        default :
        return state;
    }
}