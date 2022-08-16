import React from 'react';
import { Layout } from 'antd';
import Categories from "../components/Categories";
import NotesContent from "../components/NotesContent";

const Notes = () => {
    return (
        <Layout hasSider>
            <Categories />
            <NotesContent/>
        </Layout>
    );
};

export default Notes;