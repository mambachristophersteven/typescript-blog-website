"use client";
import Link from "next/link";
import styles from './navbar.module.css';
import DarkModeToggle from "../darkmodetoggle/DarkModeToggle";
const links= [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "About",
        url: "/about",
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact",
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard",
    },
];
export default function Navbar(){
    return(
        <div className={styles.container}>
            
            <Link href="/" className={styles.logo}>mamamia</Link>
            <div className={styles.links}>
            <DarkModeToggle/>
               {links.map(link=>(
                <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
               ))}
               <button onClick={()=>{console.log("logging")}} className={styles.logout}>logout</button>
            </div>
        </div>
    )
}