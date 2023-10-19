import styles from './Titles.module.css'

const Titles = ({ children }) => {
    return (
        <div className={styles.text}>
            {children}
        </div>
    )
}

export default Titles; 