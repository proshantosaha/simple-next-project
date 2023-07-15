import React from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='layout-Header'>
    <nav className={styles.mainVav}>
       
    <ul>
      <Link legacyBehavior href='/'><li><a>Home</a></li></Link>
      <Link legacyBehavior href='/about'><li><a>About</a></li></Link>
      <Link legacyBehavior href='/blog'><li><a>Blog</a></li></Link>
      <Link legacyBehavior href='/contact'><li><a>Contact</a></li></Link>
    </ul>
  </nav>
    
    
    
    </div>
    
  )
}
