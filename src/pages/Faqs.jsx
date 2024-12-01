import React, { useState } from "react";
import faqs from "../Utilities/Faqs";
import FaqIcon from "../assets/FaqIcon.png";

// Main Component
function Faqs() {
  return (
    <section
      id="faqs"
      className="w-screen h-[90vh] flex items-center justify-center"
    >
      <div className="w-[95%] h-full flex flex-col items-start justify-around">
        <FaqHeader />
        <div className="h-[85%] w-full flex items-center justify-center">
          <FaqList faqs={faqs} />
          <FaqIconSection />
        </div>
      </div>
    </section>
  );
}

export default Faqs;

// Header Component
function FaqHeader() {
  return (
    <div className="h-fit w-full">
      <h1 className="sm:text-lg lg:text-xl xl:text-2xl 3xl:text-3xl font-medium">
        Got Questions? Find Your Answers Here!
      </h1>
      <p className="text-xs sm:text-base lg:text-lg xl:text-xl 3xl:text-2xl">
        Quick answers to questions you may have. Can't find what you're looking
        for?{" "}
        <span className="decoration-black underline-offset-4 underline">
          <a href="tel:+918827740011">Drop a message.</a>
        </span>
      </p>
    </div>
  );
}

// List Component
function FaqList({ faqs }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleActiveIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="h-full w-full xl:w-[60%] flex flex-col items-start justify-around">
      {faqs.map((faq, index) => (
        <FaqItem
          key={faq.id}
          faq={faq}
          isActive={activeIndex === index}
          onClick={() => toggleActiveIndex(index)}
        />
      ))}
    </div>
  );
}

// Individual FAQ Item Component
function FaqItem({ faq, isActive, onClick }) {
  return (
    <div className="h-fit w-full border-b border-black/40 cursor-pointer">
      <dt className="flex items-center justify-between" onClick={onClick}>
        <h1 className="text-sm sm:text-base lg:text-xl py-2">{faq.question}</h1>
        <i
          className={isActive ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"}
        ></i>
      </dt>
      {isActive && (
        <dd className="px-2 text-xs sm:text-sm lg:text-lg text-black text-opacity-70">
          {faq.answer}
        </dd>
      )}
    </div>
  );
}

// Icon Section Component
function FaqIconSection() {
  return (
    <div className="hidden xl:flex w-[40%] h-full items-end justify-center">
      <img
        src={FaqIcon}
        alt="faq-icon"
        className="w-full h-full object-contain mxl:object-cover object-bottom"
      />
    </div>
  );
}
