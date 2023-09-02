import Page from '@/components/layout'
import { skils } from '@/data/skils'
import Link from 'next/link'
import React from 'react'

function Aboute() {
  return (
    <Page>
      <div className="aboute">
        <div className="photo">
          
        </div>
        <div className="title">
          <h2 className='name__h2'>ABOUT<span className="span">_______</span></h2>
          <h1 className="name__h1">Tohirbek</h1>
          <h5 className='text'>Detail-oriented team player with strong organizational skills. Ability to handle   multiple projects
            simultaneously with a high degree of accuracy.
          </h5>
          <h2 className='name__h2'>SKILLS<span className="span">_______</span></h2>
          <div className="box__skils">
            {skils.map((item) => (
              <Link href={item.link}>
                <div className="list" key={item.id}>
                  <div className="point"></div>
                  <h4 className='h4'>{item.name}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Page >
  )
}

export default Aboute