// import ContactDetails from '../ContactDetails/ContactDetails'
import Container from '../Container/Container'
// import Navbar from '../NavbarBlock/NavbarBlock'
import styles from './Header.module.scss'
import UserMenu from '../UserMenu/UserMenu.tsx'
import SearchCatalogGroup from '../SearchCatalogGroup/SearchCatalogGroup.tsx'

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        {/*<div className={styles.header__top}>*/}
        {/*  <Navbar />*/}
        {/*  <ContactDetails />*/}
        {/*</div>*/}
        <div className={styles.header__line} />
        <div className={styles.header__bottom}>
          <img
            className={styles.header__logo}
            src="./Logo.png"
            alt="Electronics Store"
            width="215"
            height="54"
          />
          <div className={styles.header__center}>
            <SearchCatalogGroup />
          </div>

          <UserMenu />
        </div>
      </Container>
    </header>
  )
}

export default Header
