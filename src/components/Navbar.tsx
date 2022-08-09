import {Layout, Menu, Row} from 'antd';
import React from 'react';
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const Navbar = () => {
    const router = useNavigate()
    const {isAuth} = useTypedSelector(state => state.auth)
    const {logout} = useActions()

    return (
        <Layout.Header>
            <Row justify="end">
                {isAuth ?
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        <div style={{color: 'white'}}>
                            User 1
                        </div>
                        <Menu.Item
                            onClick={() =>
                                logout()
                            }
                            key={1}>
                            Logout
                        </Menu.Item>
                    </Menu>
                    :
                    <Menu theme="dark" mode="vertical" selectable={false}>
                        <Menu.Item
                            onClick={() =>
                                router(RouteNames.LOGIN)
                            }
                            key={1}>
                            Login
                        </Menu.Item>
                    </Menu>
                }
            </Row>
        </Layout.Header>
    );
};

export default Navbar;