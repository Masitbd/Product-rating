import React from "react";
import useReviews from "../../hooks/useReviews";
import { FcRating } from "react-icons/fc";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();

  return (
    <div>
      <h3 className="text-center my-8 font-semibold text-3xl text-blue-600">
        See All Customer Review's
      </h3>
      <div className="grid  grid-cols-1 md:grid-cols-3 gap-12 mt-8 mx-16">
        {reviews.map((review) => {
          return (
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <p className="">
                <img
                  className="mx-auto rounded w-24"
                  src={review.picture}
                  alt=""
                />
              </p>
              <p className="ml-3">Name: {review.author}</p>
              <p className="ml-3">Comments: {review.text}</p>

              {review.rating === 1 && (
                <p className="flex justify-center items-center">
                  Rating:
                  <FcRating />
                </p>
              )}
              {review.rating === 2 && (
                <p className="flex justify-center items-center">
                  Rating:
                  <FcRating />
                  <FcRating />
                </p>
              )}
              {review.rating === 3 && (
                <p className="flex justify-center items-center">
                  Rating:
                  <FcRating />
                  <FcRating />
                  <FcRating />
                </p>
              )}
              {review.rating === 4 && (
                <p className="flex justify-center items-center">
                  Rating:
                  <FcRating />
                  <FcRating />
                  <FcRating />
                  <FcRating />
                </p>
              )}
              {review.rating === 5 && (
                <p className="flex justify-center items-center">
                  Rating:
                  <FcRating />
                  <FcRating />
                  <FcRating />
                  <FcRating />
                  <FcRating />
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
