import Head from "next/head"
import { useRouter } from "next/router"
import styles from '@/styles/Home.module.css'
import { useEffect,useState } from "react"


export default function Slug({}) {
  const [blog,setBlog] = useState();
  const router = useRouter();
  useEffect(() => {
    if(!router.isReady)return;
    const {slug} = router.query;
    fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a)=>{
      return a.json()
    })
    .then((parsed)=>{
      setBlog(parsed)
    })
    
  },[router.isReady])

    

 
  return (
    <div className={styles.container}>
        <main className={styles.main}>
               <h1> {blog&&blog.title}</h1>
      {/* {blog&&blog.title} */}
      <div>
      {blog&&blog.content}
      {/* {blog&&blog.content} sunt aut facere repellat provident occaecati excepturi optio reprehenderitquia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto */}
      </div>


    {/* <h1 className="content"> Article</h1> */}
    </main>
    </div>
  
  )
}



