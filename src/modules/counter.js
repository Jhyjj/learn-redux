//리덕스 모듈 만들기
//1. 초기상태값 지정(선언)
//2. 액션타입 지정
//3. 액션 생성 함수 정의
//4. 리듀서 선언

//1. 상태 초기값
const initialState = {
    number :0,
    diff : 1
}

//2. 액션타입
//다른 모듈과 액션이름이 중복되는 걸 방지하기 위해 앞에 파일명을 붙여줌
const SET_DIFF = "counter/SET_DIFF" 
const INCREASE = "counter/INCREASE"
const DECREASE = "counter/DECREASE"


//3. 액션생성함수선언
// 액션생성함수는 export 키워드를 사용하여 내보내기
export const setDiff = diff=>({type:SET_DIFF,diff});
export const increase = ()=>({type:INCREASE});
export const decrease = ()=>({type:DECREASE});


//4. 리듀서 선언
export default function counter(state=initialState,action){
    switch(action.type){
        case SET_DIFF:
            return {
                ...state,
                diff: action.diff
            }
        case INCREASE :
            return{
                ...state,
                number : state.number+state.diff
            }
        case DECREASE : 
            return{
                ...state,
                number : state.number-state.diff
            }
        default :
            return state;
    }
}