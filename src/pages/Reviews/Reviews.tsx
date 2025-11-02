import ReviewsForm from '@components/ReviewsForm/ReviewsForm'
import ReviewsList from '@components/ReviewsList/ReviewsList'
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { clearReviewsState, getAllReviews } from "@/store/reducers/reviews.ts";

const Reviews = () => {

  const dispatch = useAppDispatch()
  const { data } = useAppSelector((state) => state.reviews)

  useEffect(() => {
    dispatch(getAllReviews())

    return () => {
      dispatch(clearReviewsState())
    }
  }, [dispatch]);

  return (
    <>
      <h1>Reviews</h1>
      <ReviewsForm />
      <ReviewsList data={data} />
    </>
  )
}

export default Reviews
