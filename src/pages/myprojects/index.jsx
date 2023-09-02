import Page from '@/components/layout'
import { myprojects } from '@/data/myprojects'
import Link from 'next/link'
import React from 'react'


function MyProjects() {
  return (
    <Page>
      <div className="my-project">
        <div className="name">
          <h2 className='name__h2'>MY PROJECTS<span className="span">_______</span></h2>
        </div>
        <div className="projects">
          {myprojects.map((item) => (
            <div key={item.id} className={item.class}>
              <Link href={item.link}>
              <img className='img' src={item.img} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Page>
  )
}

export default MyProjects