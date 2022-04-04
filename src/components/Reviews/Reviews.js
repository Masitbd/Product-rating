import React from "react";
import { useEffect } from "react";
import useReviews from "../../hooks/useReviews";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();

  return (
    <div className="grid  grid-cols-3 gap-6 mt-8 mx-16">
      {reviews.map((review) => {
        return (
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <p>{review._id}</p>
            <p>{review.text}</p>
            <p>{review.rating}</p>
            {review.rating === 1 && <p>*</p>}
            {review.rating === 3 && (
              <div>
                <p>*</p>
                <p>*</p>
                <p>*</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
