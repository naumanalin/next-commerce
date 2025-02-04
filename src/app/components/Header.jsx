import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>Header
        <br />
        <Link href={'/login'} >login</Link>
    </div>
  )
}

export default Header