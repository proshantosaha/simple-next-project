import React, { useEffect, useState } from 'react'
import styles from '@/styles/Blog.module.css'
import Link from 'next/link'
import * as fs from 'node:fs';



export default function Blog(props) {
  console.log(props);
  const [blogs, setBlogs] = useState(props.allBlogs)
  return (
    <div className={styles.container}>
      <main className={styles.main}>   

        {blogs.map((blogitem) => {
          return <div key={blogitem.slug}>
            <Link legacyBehavior href={`/blog/${blogitem.slug}`}>
           
              <h3 className={styles.blogItemh3}>{blogitem.title}</h3></Link>
            <p className={styles.blogItem}> {blogitem.content.substr(0, 400)}</p>
            <Link legacyBehavior href={`/blog/${blogitem.slug}`}><button className={styles.btn}>Read More</button></Link>

          </div>
        })}
      </main>
    </div>
  )
}
// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [
//       {
//         params: {slug: 'how-to-learn-flask',},
//         params: {slug: 'how-to-learn-javascript',},
//         params: {slug: 'how-to-learn-nextjs',},
//       }, 
//     ],
//     fallback: true, // false or "blocking"
//   }
// }

export async function getStaticProps(context){
  let data = await fs.promises.readdir("blogdata");
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    console.log(item)
    myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
    allBlogs.push(JSON.parse(myfile))

  }

  return {
    props:{allBlogs},

  }
}



