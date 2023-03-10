import React from 'react';
import Form from '../jsxs/Form';
import Header from '../jsxs/Header';
import Layout from '../jsxs/Layout';
import List from '../jsxs/List';

const TodoList = () => {
    return (
        <Layout>
            <Header />
            <Form />
            <List />
        </Layout>
    );
};

export default TodoList;