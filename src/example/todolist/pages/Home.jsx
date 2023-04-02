import React from "react";
import Header from '../jsxs/Header';
import Layout from '../jsxs/Layout';
import Form from  '../jsxs/Form';
import List from  '../jsxs/List';

const Home = () => {
    return (
        <Layout>
            <Header />
            <Form />
            <List />
        </Layout>
    );
};

export default Home;