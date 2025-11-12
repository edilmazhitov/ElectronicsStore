import ReviewsForm from '@components/ReviewsForm/ReviewsForm'
import ReviewsList from '@components/ReviewsList/ReviewsList'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { clearReviewsState, getAllReviews } from '@/store/reducers/reviews.ts'
import styles from './Reviews.module.scss'
import { Container } from '@components/ui'

const Reviews = () => {
  const dispatch = useAppDispatch()
  const { data } = useAppSelector((state) => state.reviews)

  useEffect(() => {
    dispatch(getAllReviews())

    return () => {
      dispatch(clearReviewsState())
    }
  }, [dispatch])

  return (
    <Container>
      <h1 className={styles.title}>Отзывы</h1>
      <ReviewsForm />
      <h2 className={styles.title}>Список отзывов</h2>
      <ReviewsList data={data} />
    </Container>
  )
}

export default Reviews
