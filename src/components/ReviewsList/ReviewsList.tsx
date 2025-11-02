import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'
import type { FC } from "react"
import type { IReviews } from "@/types/reviewsTypes"

interface IReviewsList {
  data: IReviews[]
}

const ReviewsList: FC<IReviewsList> = (props) => {

  const {
    data
  } = props

  return (
    <>
      ReviewsList
      {data ? (
        data.map((item) => (
          <div key={item.id} className="reviews__block">
            <h2 className="reviews__user">{item.userName}</h2>
            <h2 className="reviews__text">{item.text}</h2>
            <Stack spacing={1}>
              <Rating name={`rating-${item.id}`} value={item.rating} readOnly />
            </Stack>
            <p className="reviews__data">Дата: {item.date}</p>
          </div>
        ))
      ) : (
        <h2>Нету отзывов</h2>
      )}
    </>
  )
}

export default ReviewsList
