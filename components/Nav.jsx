import Image from 'next/image'
import React from 'react'

const Nav = () => {
  return (
    <nav className='flex justify-between'>
        <div className='pt-3'>
            <Image src="/pastor.jpg" className="rounded-full" width={50} height={50} alt='logo image'/>
        </div>
        <div className='flex p-4 gap-4'>
            <a href=''>Home</a>
            <a href=''>About</a>
            <a href='/register'>Register</a>
        </div>
    </nav>
  )
}

export default Nav