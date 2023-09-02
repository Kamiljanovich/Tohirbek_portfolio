import { Button, Layout, Switch } from 'antd'
import { MenuOutlined, DownOutlined } from '@ant-design/icons';
import { useState } from 'react';

const { Header } = Layout

const HeaderComponents = ({ collapsed, setCollapsed, languages, setLanguages }) => {
    const [openModal, setOpenModal] = useState(true)

    const handlerOpen = () => {
        setOpenModal(false)
    }

    const handlerClose = () => {
        setOpenModal(true)
    }

    
    return (
        <Header>
            <div className="header">
                <Button
                    type='text'
                    icon={<MenuOutlined />}
                    className='btn'
                    onClick={() => setCollapsed(!collapsed)}
                />
                <div className="nav">


                    
                </div>
            </div>
        </Header>
    )
}

export default HeaderComponents