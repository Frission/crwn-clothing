import Directory from "../directory/directory.component"
import styles from "./homepage.module.scss"

const HomePage = () => {
    
    return (
        <div className={styles.homepage}>
            <Directory />
        </div>
    )
}
  

export default HomePage