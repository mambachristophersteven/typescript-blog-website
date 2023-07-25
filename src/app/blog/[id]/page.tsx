import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Blogpost() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.textContent}>
          <h1 className={styles.textHeading}>
            Lorem ipsum dolor sit amet consectetur adidolores expedita! Enim blanditiis magni autem voluptatem voluptas?
          </h1>
          <p className={styles.textDescription}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus nam natus provident sit nobis quaerat error tempora maiores. Nemo suscipit natus quis architecto dicta ab repudiandae mollitia sequi facilis reprehenderit!
          </p>
          <div className={styles.author}>
            <Image src='/lizzy.jpg' width={50} height={50} alt='author image' className={styles.authorImage}/>
            <p className={styles.name}>John Darwin</p>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src='/websites.jpg' alt='blog image' fill={true}/>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum laudantium fugiat repellat veritatis dolores voluptatem veniam esse debitis? Dolorum architecto commodi velit rerum consequuntur voluptatem esse ea repellendus fugiat placeat. <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quos necessitatibus saepe modi eum, odio non. Quaerat modi quis mollitia fuga perferendis est, totam quibusdam exercitationem consectetur rerum autem sit. <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum a rerum ducimus pariatur recusandae unde itaque veritatis temporibus magnam animi quaerat ab distinctio molestias alias voluptate, dolorum necessitatibus cumque dolorem.<br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit libero dolor illo deserunt ut fugiat, labore aut blanditiis natus dignissimos voluptatibus quidem nostrum rerum officia quae. Minima libero officia reprehenderit?<br/>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae a, quidem amet nemo inventore quo quos incidunt molestiae repudiandae rerum pariatur nobis id explicabo delectus suscipit, non eum aut iure.</p>
      </div>
    </div>   
  )
}