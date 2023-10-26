import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-8 py-3 text-white bg-sky-600'>
    <Link className='font-bold' href={'/'}>TheTech.</Link>
     <Link className='bg-white text-black p-2' href={'/addTopic'}>Add Topic</Link>



    </nav>
  )
}

export default Navbar