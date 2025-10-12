import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import styles from './SwiperImage.module.scss'

const SwiperImage = () => {
  const slides = ['/slide1.png', '/slide2.png']

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        speed={1000}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide
            key={idx}
            style={{ backgroundImage: `url(${slide})` }}
            className={styles['swiper-image__slide']}
          >
            <h2 className={styles['swiper-image__title']}>
              Электроинструмент <br />
              для любых нужд
            </h2>
            <p className={styles['swiper-image__subtitle']}>
              У нас обновился ассортимент сантехники, мебели для <br />
              ванной комнаты, а так же других сопутствующих товаров.
            </p>
            <button className={styles['swiper-image__button']}>
              перейти к товарам
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.53033 6.53033C6.82322 6.23744 6.82322 5.76256 6.53033 5.46967L1.75736 0.696699C1.46447 0.403806 0.989593 0.403806 0.696699 0.696699C0.403806 0.989593 0.403806 1.46447 0.696699 1.75736L4.93934 6L0.696699 10.2426C0.403806 10.5355 0.403806 11.0104 0.696699 11.3033C0.989593 11.5962 1.46447 11.5962 1.75736 11.3033L6.53033 6.53033ZM5 6.75H6V5.25H5V6.75Z"
                  fill="white"
                />
              </svg>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default SwiperImage
