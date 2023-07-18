import React, { useEffect, useState } from 'react'
import styles from '@/styles/Blog.module.css'
import Link from 'next/link'


export default function Blog() {
    const [blogs,setBlogs] = useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/api/blogs').then((a)=>{
      return a.json(); })
      .then((parsed)=>{
        console.log(parsed) 
        setBlogs(parsed)
    })
  },[])
  return (
    <div className={styles.container}> 
    <main className={styles.main}>
      {blogs.map((blogitem)=>{
        return <div key = {blogitem.slug}>
        <Link legacyBehavior href={`/blog/${blogitem.slug}`}>
        <h3  className={styles.blogItemh3}>{blogitem.title}</h3></Link>
        <p> {blogitem.content.substr(0,400)}</p>
    
      </div>
      })}


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
