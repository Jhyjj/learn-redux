import React from 'react';

//보여지는 화면을 만드는 컴포넌트 -> 스토어에 접근하지 않고 container에서 필요한 값을 props로 전달받아서 사용

const Counter = ({number,diff,onIncrease, onDecrease, onSetDiff}) => {
    const onChange = e=>{
        onSetDiff(parseInt(e.target.value))
    }
    return (
        <div>
            <h2>{number}</h2>
            <div>
                <input type="number" value={diff} min="1" onChange={onChange} />
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    );
};

export default Counter;