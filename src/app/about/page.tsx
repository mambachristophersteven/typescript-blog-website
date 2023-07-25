import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Button from '@/components/button/Button'

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='/peeps.jpg' alt='about image' fill={true} className={styles.image} />
        <div className={styles.imgText}>
          <h1 className={styles.imgHeading}> Digital Storytellers</h1>
          <h2 className={styles.imgDesc}> Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.text}>
        <div className={styles.item1}>
          <h1 className={styles.textHeading}>Who are we?</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam molestias accusantium architecto, dolore perferendis possimus officiis, alias repellat quaerat fugiat atque pariatur laboriosam, modi enim ipsa itaque commodi. Et, dolorum? </p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, quam hic. Pariatur laborum consequatur assumenda quam optio est? Veniam aliquid dolorum distinctio delectus autem blanditiis excepturi maxime ut consequuntur non?</p> 
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, placeat. Quod consectetur aspernatur quisquam quae quam est, enim minima impedit culpa itaque debitis voluptate deleniti saepe ex eius molestiae error.</p>
        </div>
        <div className={styles.item2}>
          <h1 className={styles.textHeading}>What we do?</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam molestias accusantium architecto, dolore perferendis possimus officiis, alias repellat quaerat fugiat atque pariatur laboriosam, modi enim ipsa itaque commodi. Et, dolorum? </p>
          <p>-Creative Illustrations</p>
          <p>-Dynamic Websites</p>
          <p>-Fast and Handy Mobile Apps</p>
          <Button url='/contact' text='Contact'/>
        </div>
      </div>
    </div>  
  )
}