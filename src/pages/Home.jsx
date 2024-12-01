import React from "react";
import Smp from "../assets/Smp.png";

function Home() {
  const headLine = "Fuel your freedom with";
  const highlightedText = "GORO";
  const subText =
    "Whether it's a spontaneous trip or a carefully planned journey, find a car that suits your style and schedule. Enjoy the flexibility of choosing a vehicle that's comfortable and reliable, so every mile is smooth and exactly how you planned.";
  const highlightedSubText =
    "Book easily and get ready to explore with freedom.";
  const callToAction = "Explore our Fleet";

  return (
    <section
      id="home"
      className="w-screen h-[90vh] mt-[10vh] flex flex-col-reverse xl:flex-row items-center justify-center overflow-hidden"
    >
      <div
        id="content"
        className="xl:w-[50%] w:full h-[60%] md:h-[50%] lg:h-[45%] xl:h-full flex items-center justify-center"
      >
        <ContentWrapper
          headline={headLine}
          highlightedText={highlightedText}
          subText={subText}
          highlightedSubText={highlightedSubText}
          callToAction={callToAction}
        />
      </div>
      <ImageSection imgSrc={Smp} altText="car png" />
    </section>
  );
}

const ContentWrapper = ({
  headline,
  highlightedText,
  subText,
  highlightedSubText,
  callToAction,
}) => (
  <div className="w-[90%] h-full lg:h-[85%] xl:h-[80%] flex flex-col items-start justify-evenly">
    <h3
      id="headline"
      className="w-full text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl "
    >
      {headline}{" "}
      <span className="italic font-semibold bg-gradient-to-r from-[#36516D] to-[#001C3B] text-transparent bg-clip-text">
        {highlightedText}
      </span>
    </h3>
    <p className="lg:text-lg xl:text-2xl">{subText}</p>
    <h5 className="lg:text-lg xl:text-2xl font-medium">{highlightedSubText}</h5>
    <button
      onClick={() => {
        const carsSection = document.getElementById("cars");
        if (carsSection) {
          carsSection.scrollIntoView({ behavior: "smooth" });
        }
      }}
      className="h-12 md:h-12 w-44 md:w-48 xl:w-52 xl:text-lg rounded-md font-medium border-lime-500 border-2 shadow-sm shadow-black hover:bg-lime-500 hover:shadow-none hover:scale-95 transition-all"
    >
      {callToAction}
    </button>
  </div>
);

const ImageSection = ({ imgSrc, altText }) => (
  <img
    src={imgSrc}
    alt={altText}
    className="w-full xl:w-[50%] h-[40%] md:h-[50%] lg:h-[55%] xl:h-full object-cover object-left overflow-hidden"
  />
);

export default Home;
