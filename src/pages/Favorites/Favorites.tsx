import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks.ts'
import type { IProduct } from '@/types/productsTypes.ts'
import { toggleFavorites } from '@/store/reducers/favorites.ts'
import { Container } from '@/components/ui'
import styles from './Favorites.module.scss'

const Favorites = () => {
  const dispatch = useAppDispatch()
  const { data } = useAppSelector((state) => state.products)
  const favorites = useAppSelector((state) => state.favorites)

  const favoritesList = data?.filter((item) =>
    favorites.data.some((fav) => fav.id === item.id)
  )

  const handleFavorites = (item: IProduct) => {
    dispatch(toggleFavorites(item))
  }

  return (
    <Container>
      {favorites.data.length > 0 ? (
        <div className={styles.favorites}>
          <h1 className={styles.title}>Избранные товары</h1>
          <div className={styles.list}>
            {favoritesList?.map((item) => (
              <div key={item.id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className={styles.info}>
                  <h3 className={styles.productTitle}>{item.title}</h3>
                  <p className={styles.price}>
                    {item.price.toLocaleString('ru-RU')} сом
                  </p>
                  <button
                    className={styles.removeBtn}
                    onClick={() => handleFavorites(item)}
                  >
                    Удалить из избранного
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <h2 className={styles.empty}>Нету товаров в избранных!</h2>
      )}
    </Container>
  )
}

export default Favorites
