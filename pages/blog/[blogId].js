import Head from "next/head"
import { useRouter } from "next/router"

export default function blog({title,description}) {


  const router = useRouter()
  const {blogId} = router.query
  return (
    <>
     <div>{blogId}</div>
    <Head>
        <title>{title}</title>
        <meta name='description' content={description}/>
    </Head>
    <h1 className="content"> Article</h1>
    </>
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
