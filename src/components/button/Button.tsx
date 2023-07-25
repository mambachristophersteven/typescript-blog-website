import styles from './button.module.css'
import Link from 'next/link'

//defining the type of the argument we are passing in a function in typescript
//in the code below, i had to declare props and the various arguments i will be using in my component or function
//it is annoying!
// export default function Button( props: {text: string; url: string;} ){
//     const {text, url} = props;
//     return(
//         <div className={styles.container}>
//             <Link href={url}>
//                 <button>{text}</button>
//             </Link>
//         </div>
//     )
// }



//over here, this is a simpler way of doing this no type thing
//first, declare the arguments, then come declare them with their types.
export default function Button( {text,url}:{text:string; url:string}){
    return(
        <Link href={url}>
            <button className={styles.container}>{text}</button>
        </Link>       
    )
}