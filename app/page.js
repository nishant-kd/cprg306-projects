"use client";

import React , {useRef} from 'react'
import Header from './header/page'

export default function Home() {
  return (
    <main className='bg-white text-white p-3'>
      <div className="" style={{backgroundImage: "url(/main-bg.webp)"}}>
        <Header />
      </div>
    </main>
  )
}
