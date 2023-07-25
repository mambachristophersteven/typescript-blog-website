import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Button from '@/components/button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src='/hero.png' alt='' height={550} width={550}/>
      </div>
      <div className={styles.text}>
        <h1 className={styles.heading}>Better designs for your digital products</h1>
        <p className={styles.talk}>Turning your idea into reality. We bring together the teams from the global tech industry</p>
        <Button url='/portfolio' text='See our works'/>
      </div>
    </div>   
  )
}
