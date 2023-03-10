import React, {useState} from 'react';
import Form from './Form.jsx';
import Header from './Header.jsx';
import Layout from './Layout.jsx';
import List from './List.jsx';

const TodoList = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: '리액트 공부하기.',
            body: '리액트 기초를 공부해봅시다.',
            isDone: true
        },
        {
            id: 2,
            title: '리액트 공부하기.',
            body: '리액트 기초를 공부해봅시다.',
            isDone: true
        }
    ]);

    return (
        <Layout>
            <Header />
            <Form setTodos={setTodos} todos={todos} />
            <List setTodos={setTodos} todos={todos} />
        </Layout>
    );
};

export default TodoList;