import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks.ts'
import type { IProduct } from '@/types/productsTypes.ts'
import { toggleFavorites } from '@/store/reducers/favorites.ts'

const Favorites = () => {
  const dispatch = useAppDispatch()
  const { data } = useAppSelector((state) => state.products)
  const favorites = useAppSelector((state) => state.favorites)

  const favoritesList = data?.filter((item) => {
    return favorites.data.some((fav) => fav.id === item.id)
  })

  const handleFavorites = (item: IProduct) => {
    dispatch(toggleFavorites(item))
  }

  return (
    <>
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <button onClick={() => handleFavorites(item)}>Удалить</button>
          </div>
        ))
      ) : (
        <h2>NO PRODUCTS FAVORITES</h2>
      )}
    </>
  )
}

export default Favorites
