import React from 'react'
import styles from '@/styles/Blog.module.css'
import Link from 'next/link'


export default function Blog() {
  return (
    <div className={styles.container}> 
    <main className={styles.main}>
      <div>
       
        <div>
          <Link legacyBehavior href={'/blog/learn-javscript'}>
          <h3  className={styles.blogItemh3}>  proshnto blogs</h3></Link>
          <p> this  page your welcome</p>
        </div>

        <div className='blogItem'>
          <h3>  proshnto blogs</h3>
          <p> this  page your welcome</p>
        </div>

        <div className='blogItem'>
          <h3>  proshnto blogs</h3>
          <p> this  page your welcome</p>
        </div>
      </div>
      </main>
    </div>
  )
}
