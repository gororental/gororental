import React, { useState } from "react";
import reviewList from "../Utilities/Reviews";
function Reviews() {
  return (
    <section
      id="reviews"
      className="w-screen h-[80vh] lg:h-[75vh] xl:h-[85vh] bg-white flex items-center justify-center text-black"
    >
      <div
        id="centeredReviewDiv"
        className="h-full w-[95%] flex flex-col items-start justify-evenly"
      >
        <Title />
        <ReviewCards reviews={reviewList} />
        <Note />
      </div>
    </section>
  );
}

function Title() {
  return (
    <header>
      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl 3xl:text-3xl font-medium text-opacity-40 text-black">
        Behind Every Ride
      </h3>
      <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 3xl:text-5xl tracking-wider leading-10">
        Reviews that speak{" "}
        <span className="bg-gradient-to-r from-[#36516D] to-[#001C3B] text-transparent bg-clip-text text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl font-medium">
          {" "}
          satisfaction
        </span>
      </h1>
    </header>
  );
}

function ReviewCards({ reviews }) {
  return (
    <div className="relative w-full flex overflow-hidden group">
      <div className={`flex gap-5 animate-slide`}>
        {reviews.concat(reviews, reviews).map((review, index) => (
          <ReviewCard review={review} key={index} />
        ))}
      </div>
      <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-white/90 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-white/90 to-transparent pointer-events-none"></div>
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <div
      key={review.id}
      className="h-72 tlg:h-80 w-60 sm:w-64 tlg:w-80 flex-shrink-0 border border-black/40 rounded-2xl shadow-sm bg-[url('assets/Comment.png')] bg-cover bg-center bg-no-repeat bg-cstm/5 p-4 flex flex-col justify-between"
    >
      <p className="text-black indent-8 md:text-lg 3xl:text-xl flex-grow">
        <span className="font-sans font-medium text-lg">❝</span>
        {review.review || "No review available."}
        <span className="font-sans font-medium text-lg">❞</span>
      </p>
      <footer className="flex items-center justify-between">
        <h1 className="text-base md:text-lg 2xl:text-xl">
          {review.reviewerName || "Anonymous"}
        </h1>
        <a
          href={`https://www.instagram.com/${review.reviewerInstagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl 2xl:text-2xl"
        >
          <i className="ri-instagram-line text-2x w-full"></i>
        </a>
      </footer>
    </div>
  );
}

function Note() {
  return (
    <p className="h-fit w-fit lg:text-lg 2xl:text-xl text-black">
      <span className="font-medium">Note</span>: These reviews are genuine,
      shared by real customers who have used our services. We prioritize
      transparency and honest feedback.
    </p>
  );
}

export default Reviews;
