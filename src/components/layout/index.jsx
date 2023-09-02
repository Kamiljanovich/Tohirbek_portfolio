import React, { useState } from 'react';
import { Layout } from 'antd';
import Sidebar from './Sidebar/Sidebar';
import HeaderComponents from './Header/Header';

const { Sider, Content } = Layout;

const Page = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false)
    const [languages, setLanguages] = useState(false)
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo">
                <h1 className="name__h1">Tohirbek</h1>
                </div>
                <Sidebar />
            </Sider>
            <Layout>
                <HeaderComponents
                    collapsed={collapsed}
                    setCollapsed={setCollapsed}
                    languages={languages}
                    setLanguages={setLanguages}
                />
                <Content className="content">
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};
export default Page;