"use client"
import Image from 'next/image'
import styles from './footer.module.css'

const Icons= [
    {
        id: 1,
        src: "/1.png",
        alt: "facebook",
    },
    {
        id: 2,
        src: "/2.png",
        alt: "instagram",
    },
    {
        id: 3,
        src: "/3.png",
        alt: "twitter",
    },
    {
        id: 4,
        src: "/4.png",
        alt: "youtube",
    },
]
export default function Footer(){
    return(
        <div className={styles.container}>
            <div>
                <p>&copy;mambalev 2023. All right reserved</p>
            </div>
            <div className={styles.icons}>
                {Icons.map(icon=>(
                    <Image src={icon.src} alt={icon.alt} width={15} height={15} key={icon.id} className={styles.icon}/>
                ))}
            </div>
        </div>
    )
}