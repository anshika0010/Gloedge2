import Link from 'next/link'
import React from 'react'

const Breadcrumb = ({linkname,link,name}) => {
  return (
    <div className='container mx-auto text-sm text-gray-500 py-3'>
        <p><Link href={'/'}>Home</Link> {link&&"/"} {link&&<Link href={link}>{linkname}</Link>} / {name}</p>
    </div>
  )
}

export default Breadcrumb