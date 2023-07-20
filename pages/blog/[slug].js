import Head from "next/head"
import * as fs from 'node:fs';

import { useRouter } from "next/router"
import styles from '@/styles/Home.module.css'
import { useEffect,useState } from "react"


export default function Slug(props) {
  const [blog,setBlog] = useState(props.myBlogs);
  const router = useRouter();
  return (
    <div className={styles.container}>
        <main className={styles.main}>
          <h1> {blog&&blog.title}</h1>
      <div>
      {blog&&blog.content}
      </div>
    </main>
    </div>
  
  )
}

export async function getStaticPaths(){
  return {
    paths: [
      { params: {slug: 'how-to-learn-flask'}},
      { params: {slug: 'how-to-learn-javascript'}},
      {params: {slug: 'how-to-learn-nextjs'}},
  
    ],
    fallback: true, // false or "blocking" 
  };
}

export async function getStaticProps(context){
console.log(context);
  const {slug} = context.params;
  let myBlog = await fs.readFile(`blogdata/${slug}.json`,'utf-8')
  return {
    props:{myBlog: JSON.parse(myBlog)},

  }
}
