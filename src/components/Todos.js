import React, { useState } from 'react';

const TodoList = ({todos, onToggle})=>{
    return (
        <ul>
            {
                todos.map(todo=>
                    <TodoItem todo={todo} key={todo.id} onToggle={onToggle}/>
            )}
        </ul>
    )
}

const TodoItem = ({todo, onToggle})=>{
    return (
        <li onClick={()=>onToggle(todo.id)}
        style={{color : todo.done? 'red' : 'black'}}
        >{todo.text}</li>
    )
}


const Todos = ({todos,onCreate,onToggle}) => {
const [text, setText] = useState("");
const onChange = (e)=>{
    setText(e.target.value);
}

const onsubmit = (e)=>{
    e.preventDefault(); //submit 이벤트 발생시 새로고침 방지
    onCreate(text);
    setText('');
}
console.log(todos);

    return (
        <div>
            <h2>TODO LIST</h2>
            <form onSubmit={onsubmit}>
                <input type='text' placeholder='할일을 입력하세요😎' value={text} onChange={onChange}/>
                <button type="submit">등록하기❤</button>
            </form>
            <TodoList todos={todos} onToggle={onToggle}/>
        </div>
    );
};

export default Todos;