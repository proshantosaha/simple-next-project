import Head from 'next/head'
import Footer from '@/components/Footer'
import Header from '@/components/header'

export default function About() {


  return (
    <>
       <Head>
      <title> About page</title>
      <meta name='Aboutpage' content='this section aboutpage section'/>
    </Head>
    <h1 className='content'>About</h1>
    </>
   
  )
}


About.getLayout = function pageLayout(page){
   return(
    <>

 
     {page}
     <Footer/>
    
    
    </>
   )

}
