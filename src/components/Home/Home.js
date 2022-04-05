import React from "react";
import "./Home.css";
import TvImage from "../../images/tv.jpeg";
import Reviews from "../Reviews/Reviews";
import useReviews from "../../hooks/useReviews";
import { Link } from "react-router-dom";
import { FcRating } from "react-icons/fc";

const Home = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div>
      <main>
        <section className="flex flex-col md:flex-row  px-16 mt-10">
          <div className="grow w-64">
            <h1 className="text-5xl font-bold text-orange-600 font-serif">
              Delta Elcetronics
            </h1>
            <h3 className="text-3xl font-semibold text-green-600 font-serif">
              - Cheap for you and better for environment
            </h3>
            <p className="text-slate-600 mt-4">
              Delta Electronics, Inc. today announced its consolidated sales
              revenues for February 2022 totaled NT$25,620 million, representing
              a 26 percent increase as compared to NT$20,344 million for
              February 2021 and a 2 percent decrease as compared to NT$26,270
              million for January 2022. The Company's cumulative consolidated
              sales revenues from January to February in 2022 were NT$51,890
              million, a 14 percent increase as compared to NT$45,459 million
              for the same period in 2021.
            </p>
            <button className="p-3 my-3 text-white rounded bg-orange-600">
              Live Demo
            </button>
          </div>
          <div className="grow w-32">
            <img className="h-64 ml-16 mt-5 " src={TvImage} alt="" />
          </div>
        </section>
        <section className="px-16">
          <h3 className="text-center my-8 font-semibold text-3xl text-blue-600">
            Customer reviews(3)
          </h3>
          <div className="grid grid-cols-3">
            {reviews.slice(0, 3).map((review) => {
              return (
                <div className="max-w-sm rounded  shadow-xl  py-2">
                  <img
                    className={"mx-auto rounded w-24"}
                    src={review.picture}
                    alt=""
                  />
                  <p className="ml-3">Name: {review.author}</p>
                  <p className="ml-3">Comments: {review.text}</p>
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
        </section>
        <Link to="/reviews">
          <button className="p-3 my-4 mx-16 text-white rounded bg-blue-600">
            See all reviews
          </button>
        </Link>
      </main>
    </div>
  );
};

export default Home;
