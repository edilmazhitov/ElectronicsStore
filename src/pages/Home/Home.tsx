import Container from '@/components/Container/Container.tsx'
import SwiperImage from '@/components/SwiperImage/SwiperImage.tsx'
import styles from './Home.module.scss'
import HomeNavbar from '@/components/HomeNavbar/HomeNavbar.tsx'

const Home = () => {
  return (
    <main className="main">
      <section className={styles['home-swiper']}>
        <Container>
          <SwiperImage />
        </Container>
      </section>
      <section className={styles['home-navbar']}>
        <Container>
          <HomeNavbar />
        </Container>
      </section>
    </main>
  )
}

export default Home
