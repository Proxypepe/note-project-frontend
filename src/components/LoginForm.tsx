import React, {FC, useState} from 'react';
import {Button, Form, Input} from "antd";
import {rules} from "../utils/rules";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import './styles/LoginForm.css';

const LoginForm: FC = () => {
    const {errorMessage} = useTypedSelector(state => state.auth);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {login} = useActions();

    const submitForm = () => {
        login(username, password);
    }

    return (
        <Form
            onFinish={submitForm}
        >
            <div className="name">
                <h1>
                    Sign in
                </h1>
            </div>
            {errorMessage && <div style={{color: 'red'}}>
                {errorMessage}
            </div>}
            <Form.Item
                label="Username"
                name="username"
                rules={[rules.required("Please, enter username")]}
            >
                <Input
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[rules.required("Please, enter password")]}
            >
                <Input.Password
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;