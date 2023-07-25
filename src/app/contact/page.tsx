import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Button from '@/components/button/Button'

export default function Contact() {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.heading}> Let's talk now</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src='/contact.png' alt='image' fill={true} className={styles.image}/>
        </div>
        <div className={styles.form}>
          <input type="text" name="name" id="name" placeholder='name'  className={styles.input}/>
          <input type="email" name="name" id="email" placeholder='email'  className={styles.input}/>
          <textarea name="" id="" cols= {30} rows={10} className={styles.textarea} placeholder='message'></textarea>
          <Button url='#' text='Send'/>
        </div>
      </div>
    </div>   
  )
}