import ContactDetails from "../ContactDetails/ContactDetails"
import Container from "../Container/Container"
import Navbar from "../NavbarBlock/NavbarBlock"
import styles from "./Header.module.scss"


const Header = () => {

    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.header__top}>
                    <Navbar />
                    <ContactDetails />
                </div>
                <div className={styles.header__line} />
            </Container>
        </header>   
    )
}

export default Header