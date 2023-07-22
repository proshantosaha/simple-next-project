import React, { useState } from 'react'
import styles from '@/styles/Contact.module.css'


const Contact = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [desc,setDesc] = useState('')




  const handleChange = (e) =>{

    if(e.target.name==="phone"){
      setPhone(e.target.value)
    }
    else if(e.target.name==="email"){
      setEmail(e.target.value)
    }
    
    else if(e.target.name==="name"){
      setName(e.target.value)
    }
    
    else if(e.target.name==="desc"){
      setDesc(e.target.value )
    }
    
    
      

    console.log();
  }


  const handleSubmit = (e) =>{
      e.preventDefault()
      console.log(phone,name,email,desc);


      async function postJSON(data) {
        try {
          const response = await fetch("http://localhost:3000/api/postContact", {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
      
          const result = await response.json();
          console.log("Success:", result);
          alert("thanks for contacting us")
          setName('')
          setEmail('')
          setPhone('')
          setDesc('')
        } catch (error) {
          console.error("Error:", error);
        }
      }
      
      const data = {phone,email,name,desc};
      postJSON(data);
  }

  return (


    <div className={styles.container}>
      <h2>contact us</h2>
      <form onSubmit={handleSubmit   }>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>Name</label>
          <input className={styles.input} type="text" value={name} onChange={handleChange} id="name" name="name" />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlabel}>Email address</label>
          <input className={styles.input} type="email" value={email} onChange={handleChange} id="email" name="email" />
          <div id='emailHelp' className={styles.fromtext}>we'll never share your email with anyone else</div>
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>Password</label>
          <input  type="phone" value={phone} onChange={handleChange}  id="phone" name="phone" />
        </div>


        <div className={styles.mb3}>
          <label  className={styles.formlabel} htmlFor="desc">Comments</label>
          <textarea className={styles.input} value={desc} name='desc' onChange={handleChange}  id="desc"></textarea>
        </div>


        <button type="submit" className={styles.btn}>Submit</button>
      </form>
    </div>
  )
}

export default Contact