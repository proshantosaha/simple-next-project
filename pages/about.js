import Head from 'next/head'
import Footer from '@/components/Footer'
import Header from '@/components/header'
import styles from '@/styles/About.module.css'


export default function About() {


  return (
    <>
      <Head>
        <title> About page</title>
        <meta name='Aboutpage' content='this section aboutpage section' />
      </Head>

      <div className={styles.container}>
        <h1 className={styles.center}>About page</h1>
        <h2>introduction</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
          optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
          obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
          nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
          tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
          quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
          sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
          minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
          quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur
          fugiat, temporibus enim commodi iusto libero magni deleniti quod quam
          consequuntur! Commodi minima excepturi repudiandae velit hic maxime
          doloremque. Quaerat provident commodi consectetur veniam similique ad
        </p>
        <h2>services offered</h2>
        <p>quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur
          fugiat, temporibus enim commodi iusto libero magni deleniti quod quam
          consequuntur! Commodi minima excepturi repudiandae velit hic maxime
          doloremque. Quaerat provident commodi consectetur veniam similique ad
        </p>
         <p>we offered follwing services</p>
         <ul>
          <li>service 1</li> 
          <li>service 2</li> 
          <li>service 3</li> 
          <li>service 4</li> 
          <li>service 5</li> 
          <li>service 6</li> 
          <li>service 7</li> 
          <li>service 8</li> 
         </ul>
        <h2>contact us</h2>
        <p>
          recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
          minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
          quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur
          fugiat, temporibus enim commodi iusto libero magni deleniti quod quam
          consequuntur! Commodi minima excepturi repudiandae velit hic maxime
          doloremque. Quaerat provident commodi consectetur veniam similique ad
        </p>

      </div>
    </>

  )
}


About.getLayout = function pageLayout(page) {
  return (
    <>


      {page}
      <Footer />


    </>
  )

}
