import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, setDiff } from '../modules/counter';
import Counter from './Counter';


const CounterContainer = () => {
    //useSelector는 리덕스 스토어의 상태를 조회하는 hook함수
    //store.getState() 할때의 결과 동일함
    const {number, diff} = useSelector(state=>(state.counter))
    //{number:0, diff:1} 객체구조분해할당을 사용

    //useDispatch는 리덕스 스토어의 dispatch를 함수에서 사용할 수 있게 해주는 hook함수
    //각 액션을 디스패치하는 함수 만들기
    const dispatch = useDispatch();
    const onIncrease = ()=>dispatch(increase());
    const onDecrease = ()=>dispatch(decrease());
    const onSetDiff = diff=>dispatch(setDiff(diff));
    //porps로 프로젠테이션 컴포넌트에 전달하기
    return (
        <div>
            <Counter number={number} diff={diff} onDecrease={onDecrease} onIncrease={onIncrease} onSetDiff={onSetDiff}/>
        </div>
    );
};

export default CounterContainer;