import styles from './Home.module.scss'

import Container from '@/components/Container/Container.tsx'
import SwiperImage from '@/components/SwiperImage/SwiperImage.tsx'

import HomeNavbar from '@/components/HomeNavbar/HomeNavbar.tsx'

import { CiCreditCard1, CiDiscount1 } from 'react-icons/ci'
import { SlSocialDropbox } from 'react-icons/sl'
import { TbListDetails } from 'react-icons/tb'

import brand from '@assets/brandImages/brand.png'
import brand2 from '@assets/brandImages/brand2.png'
import brand3 from '@assets/brandImages/brand3.png'
import brand4 from '@assets/brandImages/brand4.png'
import brand5 from '@assets/brandImages/brand5.png'
import brand6 from '@assets/brandImages/brand6.png'
import brand7 from '@assets/brandImages/brand7.png'
import Products from '@components/Products/Products'

const Home = () => {
  return (
    <main className="main">
      <section className={styles['home-swiper']}>
        <Container>
          <SwiperImage />
        </Container>
      </section>
      <section className={styles['home-interesting']}>
        <Container>
          <ul className={styles['home-interesting__list']}>
            <li className={styles['home-interesting__list-item']}>
              <CiCreditCard1 className={styles['home-interesting__icon']} />
              <p className={styles['home-interesting__text']}>
                Оплата любым удобным способом
              </p>
            </li>
            <li className={styles['home-interesting__list-item']}>
              <TbListDetails className={styles['home-interesting__icon']} />
              <p className={styles['home-interesting__text']}>
                Большой выбор товаров в каталоге
              </p>
            </li>
            <li className={styles['home-interesting__list-item']}>
              <SlSocialDropbox className={styles['home-interesting__icon']} />
              <p className={styles['home-interesting__text']}>
                Осуществляем быструю доставку
              </p>
            </li>
            <li className={styles['home-interesting__list-item']}>
              <CiDiscount1 className={styles['home-interesting__icon']} />
              <p className={styles['home-interesting__text']}>
                Делаем скидки на крупные покупки
              </p>
            </li>
          </ul>
        </Container>
      </section>
      <section className={styles['home-navbar']}>
        <Container>
          <HomeNavbar />
        </Container>
      </section>
      <section className={styles['home-discounts']}>
        <Container>
          <div className={styles['home-discounts__block']}>
            <div className={styles['home-discounts__box']}>
              <h2 className={styles['home-discounts__box-title']}>
                Метизные <br />
                изделия
              </h2>
              <div className={styles['home-discounts__box-text']}>
                <p>до -15%</p>
              </div>
            </div>
            <div className={styles['home-discounts__box']}>
              <h2 className={styles['home-discounts__box-title']}>
                Лакокрасочные материалы
              </h2>
              <div className={styles['home-discounts__box-text']}>
                <p>до -30%</p>
              </div>
            </div>
            <div className={styles['home-discounts__box']}>
              <h2 className={styles['home-discounts__box-title']}>
                Напольные <br />
                покрытия
              </h2>
              <div className={styles['home-discounts__box-text']}>
                <p>до -25%</p>
              </div>
            </div>
            <div className={styles['home-discounts__box']}>
              <h2 className={styles['home-discounts__box-title']}>
                Все для <br />
                отоплления
              </h2>
              <div className={styles['home-discounts__box-text']}>
                <p>до -30%</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className={styles.products}>
        <Container>
          <h2 className={styles.products__title} >Товары</h2>
          <Products />
        </Container>
      </section>
      <section className={styles.brand}>
        <Container>
          <h2 className={styles.brand__title}>Популярные бренды</h2>
          <ul className={styles.brand__list}>
            <li className={styles['brand__list-item']}>
              <img
                src={brand}
                className={styles.brand__image}
                width="150"
                height="120"
                alt="brand"
              />
            </li>
            <li className={styles['brand__list-item']}>
              <img
                src={brand2}
                className={styles.brand__image}
                width="150"
                height="120"
                alt="brand"
              />
            </li>
            <li className={styles['brand__list-item']}>
              <img
                src={brand3}
                className={styles.brand__image}
                width="150"
                height="120"
                alt="brand"
              />
            </li>
            <li className={styles['brand__list-item']}>
              <img
                src={brand4}
                className={styles.brand__image}
                width="150"
                height="120"
                alt="brand"
              />
            </li>
            <li className={styles['brand__list-item']}>
              <img
                src={brand5}
                className={styles.brand__image}
                width="150"
                height="120"
                alt="brand"
              />
            </li>
            <li className={styles['brand__list-item']}>
              <img
                src={brand6}
                className={styles.brand__image}
                width="150"
                height="120"
                alt="brand"
              />
            </li>
            <li className={styles['brand__list-item']}>
              <img
                src={brand7}
                className={styles.brand__image}
                width="150"
                height="120"
                alt="brand"
              />
            </li>
          </ul>
        </Container>
      </section>
    </main>
  )
}

export default Home
