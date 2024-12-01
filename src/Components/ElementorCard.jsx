import React from "react";
import elementorElements from "../Utilities/Elementor";

function ElementorCard() {
  return (
    <section
      id="elementorCard"
      className="w-full lg:h-72 h-[90vh] flex items-center justify-center overflow-hidden font-Jost"
    >
      <div
        id="centeredElementCard"
        className="w-[95%] h-full bg-[#36516D]/10 border border-[#36516D] rounded-lg flex lg:flex-row flex-col items-start justify-evenly"
      >
        {elementorElements.map((element, index) => (
          <ElementCard
            key={index}
            element={element}
            isLast={index === elementorElements.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

const ElementCard = ({ element, isLast }) => (
  <div
    id="elementCard"
    className={`w-full h-full flex flex-col items-center justify-evenly lg:justify-center lg:gap-5 border-cstm ${
      !isLast ? "border-b lg:border-r lg:border-b-0" : ""
    }`}
  >
    <img
      src={element.icon}
      alt={element.title || "Element icon"}
      loading="lazy"
      className="w-16 h-16 hover:scale-105 transition-all ease-in-out"
    />
    <h1 className="text-xl sm:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold text-cstm">
      {element.title}
    </h1>
    <p className="w-[90%] text-sm sm:text-base xl:text-lg text-center text-opacity-95 italic">
      "{element.description}"
    </p>
  </div>
);

export default ElementorCard;
