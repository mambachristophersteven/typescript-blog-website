import styles from './darkmodetoggle.module.css'

export default function DarkModeToggle(){
    const mode = "dark";
    return(
        <div className={styles.container}>
            <div className={styles.sun}>🌞</div>
            <div className={styles.moon}>🌙</div>
            <div className={styles.ball} style={mode != "dark" ? {left: "2px"}: { right: "2px"}}></div>
        </div>
    )
}