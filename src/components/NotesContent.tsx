import React, {FC} from 'react';
import {Button, Divider, Layout, Tag} from "antd";
import './styles/NoteContent.css';
import {Col, Row} from 'antd';

const {Header, Content} = Layout;

const NotesContent: FC = () => {
    return (
        <Layout
            style={{
                marginLeft: 200,
            }}
        >
            <Header className='header__page'
                    style={{backgroundColor: 'white'}} // ????
            >
                <h2>Notes</h2>
                <Button>
                    Create new note
                </Button>
            </Header>
            <Content className='note__content'>
                <div className='note__block'>
                    <Row className='content__header'>
                        <Col>
                            <h2>
                                Content header
                            </h2>
                        </Col>
                        <Col>
                            <div>
                                menu
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Divider style={{margin: '10px 0'}}/>
                    </Row>
                    <Row>
                        <p className='text'>
                            Here will be some text
                        </p>
                    </Row>
                    <Row>
                        <Divider style={{margin: '10px 0'}}/>
                    </Row>
                    <Row>
                        <Tag color='red' style={{margin: '5px'}}>
                            first tag
                        </Tag>
                    </Row>
                </div>
            </Content>
        </Layout>
    );
};

export default NotesContent;