import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'
import type { FC } from 'react'
import type { IReviews } from '@/types/reviewsTypes'
import styles from './ReviewsList.module.scss'

interface IReviewsList {
  data: IReviews[]
}

const ReviewsList: FC<IReviewsList> = (props) => {
  const { data } = props

  return (
    <>
      {data ? (
        data.map((item) => (
          <div key={item.id} className={styles.reviews__block}>
            <h2 className={styles.reviews__user}>{item.userName}</h2>
            <h2 className={styles.reviews__text}>{item.text}</h2>
            <Stack spacing={1}>
              <Rating name={`rating-${item.id}`} value={item.rating} readOnly />
            </Stack>
            <p className={styles.reviews__data}>Дата: {item.date}</p>
          </div>
        ))
      ) : (
        <h2>Нету отзывов</h2>
      )}
    </>
  )
}

export default ReviewsList
