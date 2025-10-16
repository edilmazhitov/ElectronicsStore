import Container from '../Container/Container'
import styles from './Footer.module.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__top}>
          <img
            src="./Logo.png"
            className={styles.footer__logo}
            width="215"
            height="54"
            alt="Logo"
          />
          <h2 className={styles.footer__licencess}>ООО «Стройоптторг» </h2>
          <h2 className={styles.footer__documnents}>
            ИНН: 0901051787 <br />
            КПП 090101001
          </h2>
          <div className={styles.footer__email}>
            <h2>Email:</h2>
            <Link
              to="mailto:info@stroiopttorg.ru"
              className={styles['footer__email-link']}
            >
              info@stroiopttorg.ru
            </Link>
          </div>
          <div className={styles.footer__time}>
            <Link
              className={styles['footer__time=-number']}
              to="tel:88004440065"
            >
              8 800 444 00 65
            </Link>
            <p className={styles['footer__time-text']}>
              Ежедневно, с 8:00 до 18:00
            </p>
          </div>

          <button className={styles.footer__button}>Заказать звонок</button>
        </div>
        <div className={styles.footer__line} />
      </Container>
    </footer>
  )
}

export default Footer
