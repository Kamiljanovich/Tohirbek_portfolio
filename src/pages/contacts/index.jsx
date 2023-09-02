import { IconTelegram } from '@/assets/icons';
import Page from '@/components/layout'
import { InstagramOutlined, GithubOutlined } from '@ant-design/icons';
import Link from 'next/link';

function Contacts() {
  return (
    <Page>
      <div className="contacts">
        <div className="name">
          <h2 className='name__h2'>CONTACTS<span className="span">_______</span></h2>
        </div>
        <div className="container__contacts">
          <div className="title">
            <h1 className="name__h1">Tohirbek</h1>
            <p className='p'>It's important to have a brand that represents you and what you stand for. That's why
              I'm committed tohelping you create a website that truly represents you, resonates with your audience, and
              makes a real difference. Together we can create a website that inspires, inspires and makes an impact.
              Let's do that!
            </p>
            <div className="box__icons">
              {/* <Link href="https://www.instagram.com/a1mboy.dev/"><InstagramOutlined className='icon' /></Link>
              <Link href="https://t.me/azimboy0067"><IconTelegram /></Link>
              <Link href="https://github.com/AzimboyUZB"><GithubOutlined className='icon' /></Link> */}
            </div>
          </div>
          <div className="photo">
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Contacts