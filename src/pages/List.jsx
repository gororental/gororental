import React from "react";
import carList from "../Utilities/List";
import { gPillColor } from "../Constants/Objects";

function List() {
  return (
    <section
      id="cars"
      className="w-screen overflow-hidden min-h-[90vh] mt-[5vh] font-Jost flex items-center justify-center text-black"
    >
      <div id="centeredDiv" className="w-[95%] min-h-[90vh]">
        <h1 className="text-3xl lg:text-5xl text-black tracking-widest">
          Explore Our Fleet_
        </h1>
        <div
          id="carCardsContainer"
          className="min-h-[80vh] w-full mt-5 flex flex-wrap items-start justify-between gap-4 xl:gap-3 2xl:gap-4 last:justify-stretch"
        >
          {carList.length === 0 ? (
            <h1>No cars available at this moment. Please check back later.</h1>
          ) : (
            carList.map((car, index) => <CarCard key={index} car={car} />)
          )}
        </div>
      </div>
    </section>
  );
}

const CarCard = ({ car }) => {
  const specs = [
    { icon: car.fuelIcon, value: car.fuelType },
    { icon: car.modelIcon, value: car.modelYear },
    { icon: car.transmissionIcon, value: car.transmissionType },
  ];

  return (
    <div
      id="carContainer"
      className="h-80 2xl:h-96 w-full tmd:w-[48%] tlg:w-[32%] mxl:w-[24%] 3xl:w-[24%] border border-black/40 flex items-center justify-center rounded-lg shadow-sm"
    >
      <div
        id="centeredCarContainer"
        className="h-[90%] w-[90%] flex flex-col items-center justify-evenly"
      >
        <div className="h-[50%] w-full">
          <img
            src={car.profile}
            alt={`${car.name} image`}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="h-[15%] w-full flex items-start justify-between">
          <div>
            <h1 className="2xl:text-xl font-semibold">{car.name}</h1>
            <p className="text-sm tmd:text-md tracking-tighter font-medium leading-3 text-opacity-70 text-black">
              {car.category}
            </p>
          </div>
          
          { gPillColor.map(([pricingTier, pillColor]) => (
             pricingTier === car.pricingTier && (
            <p className={`${pillColor} py-0 px-5 text-sm font-medium flex items-center justify-center rounded-xl`}>
            {car.pricingTier}
          </p>)))}
        </div>
        <div className="h-[15%] w-full  border-black/20 border-t border-b flex items-center justify-around">
          {specs.map((spec, i) => (
            <CarSpec key={spec.icon} icon={spec.icon} value={spec.value} />
          ))}
        </div>
        <a href="tel:+918827740011">
          <button className="h-12 w-48 rounded-md bg-lime-400 font-medium transition-all hover:scale-95">
            Book Now
          </button>
        </a>
      </div>
    </div>
  );
};

const CarSpec = ({ icon, value }) => (
  <div className="flex items-center justify-start gap-2">
    <img
      src={icon}
      alt="spec icon"
      key={value}
      className="h-4 w-4 object-cover"
    />
    <p className="text-sm font-semibold">{value}</p>
  </div>
);

export default List;
