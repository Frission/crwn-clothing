import styles from "./menu-item.module.scss"

const MenuItem = ({ title, subtitle, imageUrl, large }: MenuItemProps) => {

    return <div      
        className={`${styles.menuItem} ${large && styles.large}`}
    >
        <div style={{ backgroundImage: `url(${imageUrl})` }} className={styles.bgImage}></div>
        <div className={styles.content}>
            <h1 className={styles.title}>{title.toUpperCase()}</h1>
            <span className={styles.subtitle}>{subtitle?.toUpperCase() ?? "SHOP NOW"}</span>
        </div>
    </div>
}

interface MenuItemProps {
    title: string,
    subtitle?: string,
    imageUrl: string | null | undefined,
    large?: boolean,
}

export default MenuItem