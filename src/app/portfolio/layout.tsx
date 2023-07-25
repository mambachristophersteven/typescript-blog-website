import styles from './page.module.css'

export default function PortfolioHeader({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div>
            <h1 className={styles.header}>Our Works</h1>
            {children}
        </div>
    )
  }
  