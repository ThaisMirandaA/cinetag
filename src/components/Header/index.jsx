import { Link } from "react-router-dom";
import logo from "./Logo-cinetag-branco 1.png"
import LinkHeader from "components/LinkHeader";
import styles from "./Header.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/" >
                <img src={logo} alt="Logo do Cinetag" />
            </Link>
            <nav>
                <LinkHeader url="/">
                    Home
                </LinkHeader>
                <LinkHeader url="/favoritos">
                    Favoritos
                </LinkHeader>
            </nav>
        </header>
    )
}

export default Header;