import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Blog() {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageHeading}>Our Blogs</h1>
      <Link href='/blog/testBlog'>
        <div className={styles.item}>
          <div className={styles.imgContainer}>
            <Image src='/people.jpg' alt='blog' fill={true} className={styles.image}/>
          </div>
          <div className={styles.textContent}>
            <h1 className={styles.textHeading}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod veniam numquam hic 
            </h1>
            <p className={styles.textDescription}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus quaerat quisquam mollitia iste, facilis modi, in cupiditate sunt, consectetur sed tempora sapiente asperiores atque nihil tempore? Officia dolorem quos sit?
            </p>
          </div>
        </div>
      </Link>
      <Link href='/blog/testBlog'>
        <div className={styles.item}>
          <div className={styles.imgContainer}>
            <Image src='/people.jpg' alt='blog' fill={true} className={styles.image}/>
          </div>
          <div className={styles.textContent}>
            <h1 className={styles.textHeading}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod veniam numquam hic 
            </h1>
            <p className={styles.textDescription}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus quaerat quisquam mollitia iste, facilis modi, in cupiditate sunt, consectetur sed tempora sapiente asperiores atque nihil tempore? Officia dolorem quos sit?
            </p>
          </div>
        </div>
      </Link>
      <Link href='/blog/testBlog'>
        <div className={styles.item}>
          <div className={styles.imgContainer}>
            <Image src='/people.jpg' alt='blog' fill={true} className={styles.image}/>
          </div>
          <div className={styles.textContent}>
            <h1 className={styles.textHeading}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod veniam numquam hic 
            </h1>
            <p className={styles.textDescription}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus quaerat quisquam mollitia iste, facilis modi, in cupiditate sunt, consectetur sed tempora sapiente asperiores atque nihil tempore? Officia dolorem quos sit?
            </p>
          </div>
        </div>
      </Link>
      <Link href='/blog/testBlog'>
        <div className={styles.item}>
          <div className={styles.imgContainer}>
            <Image src='/people.jpg' alt='blog' fill={true} className={styles.image}/>
          </div>
          <div className={styles.textContent}>
            <h1 className={styles.textHeading}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod veniam numquam hic 
            </h1>
            <p className={styles.textDescription}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus quaerat quisquam mollitia iste, facilis modi, in cupiditate sunt, consectetur sed tempora sapiente asperiores atque nihil tempore? Officia dolorem quos sit?
            </p>
          </div>
        </div>
      </Link>
      <Link href='/blog/testBlog'>
        <div className={styles.item}>
          <div className={styles.imgContainer}>
            <Image src='/people.jpg' alt='blog' fill={true} className={styles.image}/>
          </div>
          <div className={styles.textContent}>
            <h1 className={styles.textHeading}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod veniam numquam hic 
            </h1>
            <p className={styles.textDescription}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus quaerat quisquam mollitia iste, facilis modi, in cupiditate sunt, consectetur sed tempora sapiente asperiores atque nihil tempore? Officia dolorem quos sit?
            </p>
          </div>
        </div>
      </Link>
      
    </div>   
  )
}