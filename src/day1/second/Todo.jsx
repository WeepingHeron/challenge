import React from 'react';
import './todo.css';

function Todo({todo, onDeleteHandler, onEditHandler}) {
    return (
        <div className='todo-container;'>
            <div>
                <h2 className='todo-title'>{todo.title}</h2>
                <div>{todo.body}</div>
            </div>
            <div className='button-set'>
                <button
                className='todo-delete-button button'
                onClick={() => onDeleteHandler(todo.id)}
                >
                    삭제하기
                </button>
                <button
                className='todo-complete-button button'
                onClick={() => onEditHandler(todo.id)}
                >
                    {todo.isDone ? '취소' : '완료'}
                </button>
            </div>
        </div>
    );
}

export default Todo;