import { HomeOutlined, FolderOpenOutlined, CopyOutlined, PhoneOutlined } from '@ant-design/icons'

export const menubar = [
  {
    id: 1,
    path: '/',
    label:" Home",
    icon: <HomeOutlined className='menubar__icons'/>,
  },
  {
    id: 2,
    path: '/aboute',
    label: 'Aboute',
    icon: <CopyOutlined className='menubar__icons'/>,
  },
  {
    id: 3,
    path: '/myprojects',
    label: 'My Projects',
    icon: <FolderOpenOutlined className='menubar__icons'/>,
  },
  {
    id: 4,
    path: '/contacts',
    label: 'Contacts',
    icon: <PhoneOutlined className='menubar__icons'/>,
  },
]