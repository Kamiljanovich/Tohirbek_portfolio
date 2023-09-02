import { menubar } from '@/data/menubar';
import React, { useEffect, useState } from 'react'
import { Menu } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const { pathname } = useRouter()
  const [activeKey, setActiveKey] = useState(['1'])

  useEffect(() => {
    for (let item of menubar) {
      if (item.path === pathname) {
        setActiveKey([`${item.id}`])
      }
    }
  }, [pathname])
  
  return (
    <div>
      <Menu
        selectedKeys={activeKey}
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={menubar.map(({ id, path, label, icon }) => ({
          key: id,
          label: <Link href={path}>{label}</Link>,
          icon: icon,
        }))}
      />
    </div>
  )
}

export default Sidebar