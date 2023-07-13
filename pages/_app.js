import Head from 'next/head'
import Footer from '@/components/Footer'
import Header from '@/components/header'
// import '@/styles/globals.css' 
import '../styles/layout.css'

export default function App({ Component, pageProps }) {
  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps}/>)
   }
  
 
  return(
    <>
      <Head>
        <title>main section</title>
        <meta name="description" content="this is main section" />
       
    
      </Head>
    <Header/>
     <Component {...pageProps} />
     <Footer/>
    
    </>

  )
}
