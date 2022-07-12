import {combineReducers} from 'redux';
import counter from './counter';
import todos from './todos';

//컴바인리듀서라는 리덕스의 내장함수를 이용해서 todos와 counter 합쳐주기

const rootReducer = combineReducers({
    counter,
    todos
})

export default rootReducer;