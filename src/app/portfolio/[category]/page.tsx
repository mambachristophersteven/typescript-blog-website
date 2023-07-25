import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import Button from '@/components/button/Button'

export default function PortfolioCategory({params}:{params:any}) {
  // console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.textContent}>
          <h1 className={styles.itemHeading}>Creative Portfolio</h1>
          <p className={styles.itemContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quidem ex debitis fuga alias, vel aliquid, sapiente nemo harum dolores veritatis dolorum rerum illum aut impedit? Quos illum ratione dolores? nemo harum dolores veritatis dolorum rerum illum aut impedit? Quos illum ratione dolores?</p>
          <Button text="See More" url='#'/>
        </div>
        <div className={styles.imgContainer}>
          <Image src='/peeps.jpg' alt='illustation picture' fill={true}/>
        </div>
      </div> 
      <div className={styles.item}>
        <div className={styles.textContent}>
          <h1 className={styles.itemHeading}>Creative Portfolio</h1>
          <p className={styles.itemContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quidem ex debitis fuga alias, vel aliquid, sapiente nemo harum dolores veritatis dolorum rerum illum aut impedit? Quos illum ratione dolores? nemo harum dolores veritatis dolorum rerum illum aut impedit? Quos illum ratione dolores?</p>
          <Button text="See More" url='#'/>
        </div>
        <div className={styles.imgContainer}>
          <Image src='/peeps.jpg' alt='illustation picture' fill={true}/>
        </div>
      </div> 
      <div className={styles.item}>
        <div className={styles.textContent}>
          <h1 className={styles.itemHeading}>Creative Portfolio</h1>
          <p className={styles.itemContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quidem ex debitis fuga alias, vel aliquid, sapiente nemo harum dolores veritatis dolorum rerum illum aut impedit? Quos illum ratione dolores? nemo harum dolores veritatis dolorum rerum illum aut impedit? Quos illum ratione dolores?</p>
          <Button text="See More" url='#'/>
        </div>
        <div className={styles.imgContainer}>
          <Image src='/peeps.jpg' alt='illustation picture' fill={true}/>
        </div>
      </div> 
    </div>
      
  )
}