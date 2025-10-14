import styles from './HomeNavbar.module.scss'
import type { HomeNavbarT } from '@/types/navbarTypes'
import { Link } from 'react-router-dom'
import Img1 from '@assets/HomeNavbarImages/img1.png'
import Img2 from '@assets/HomeNavbarImages/img2.png'
import Img3 from '@assets/HomeNavbarImages/img3.png'
import Img4 from '@assets/HomeNavbarImages/img4.png'
import Img5 from '@assets/HomeNavbarImages/img5.png'
import Img6 from '@assets/HomeNavbarImages/img6.png'
import Img7 from '@assets/HomeNavbarImages/img7.png'
import Catalog from '@assets/HomeNavbarImages/catalog.png'

const HomeNavbar = () => {
  const homeNavbarList: HomeNavbarT[] = [
    {
      to: '/',
      name: 'Сантехника',
      img: Img1,
    },
    {
      to: '/',
      name: 'Отделочные материалы',
      img: Img2,
    },
    {
      to: '/',
      name: 'Электротовары',
      img: Img3,
    },
    {
      to: '/',
      name: 'Инструменты',
      img: Img4,
    },
    {
      to: '/',
      name: 'Столярные изделия',
      img: Img5,
    },
    {
      to: '/',
      name: 'Общестроительные материалы',
      img: Img6,
    },
    {
      to: '/',
      name: 'Все для сауны и баня',
      img: Img7,
    },
    {
      to: '/',
      name: 'Перейти в каталог',
      img: Catalog,
    },
  ]

  return (
    <div className={styles['home-navbar']}>
      <ul className={styles['home-navbar__list']}>
        {homeNavbarList.map((link) => (
          <li key={link.name} className={styles['home-navbar__list-item']}>
            <Link to={link.to} className={styles['home-navbar__link']}>
              <img
                className={styles['home-navbar__image']}
                src={link.img}
                alt=""
                width=""
                height=""
                loading="lazy"
              />
              <h3 className={styles['home-navbar__link-title']}>{link.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HomeNavbar
