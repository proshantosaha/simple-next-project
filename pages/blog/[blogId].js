import Head from "next/head"
import { useRouter } from "next/router"
import styles from '@/styles/Home.module.css'


export default function blog({title,description}) {


  const router = useRouter()
  const {blogId} = router.query
  return (
    <div className={styles.container}>
        <main className={styles.main}>

        <div>{blogId}</div>
        <Head>
            <title>{title}</title>
            <meta name='description' content={description}/>
        </Head>

      <h1> title page {blogId}</h1>
      <div>
      proshnto blogsthis page your welcomeproshnto blogsthis page your welcomeproshnto blogsthis page your welcome
      </div>


    <h1 className="content"> Article</h1>
    </main>
    </div>
  
  )
}


export async function getServerSidePeops() {

    return{
      porps:{
        title:'Article Title',
        description:'Article description'
      }
    }
    
}
