import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks.ts'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import type { IReviews } from '@/types/reviewsTypes.ts'
import { addReviews } from '@/store/reducers/reviews.ts'
import styles from './ReviewsForm.module.scss'

const ReviewsForm = () => {
  const [value, setValue] = useState<number>(1)

  const { data } = useAppSelector((state) => state.user)

  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IReviews>({ mode: 'onBlur' })

  const addNewReview = (
    formData: Omit<IReviews, 'id' | 'date' | 'rating' | 'userName'>
  ) => {
    const newReview: IReviews = {
      ...formData,
      rating: value,
      userName: data?.fullName || 'Аноним',
      id: Date.now(),
      date: new Date().toLocaleString(),
    }

    dispatch(addReviews(newReview))
    reset()
    setValue(1)
  }

  return (
    <div className={styles.reviews}>
      <form
        className={styles.reviews__form}
        onSubmit={handleSubmit(addNewReview)}
      >
        <Stack spacing={1}>
          <Rating
            name="user-rating"
            value={value}
            size="large"
            onChange={(_, newValue) => {
              setValue(newValue ?? 1)
            }}
          />
        </Stack>
        <label htmlFor="textarea-reviews" className={styles.reviews__label}>
          Текст отзыва: <span>*</span>
        </label>{' '}
        <br />
        <textarea
          className={styles.reviews__textarea}
          {...register('text', { required: 'Отзыв обязателен' })}
          cols={30}
          rows={10}
          placeholder="Напишите свой отзыв..."
          id="textarea-reviews"
        />
        {errors.text && <p className="reviews__error">{errors.text.message}</p>}
        <button className={styles.reviews__btn} type="submit">
          Оставить отзыв
        </button>
      </form>
    </div>
  )
}

export default ReviewsForm