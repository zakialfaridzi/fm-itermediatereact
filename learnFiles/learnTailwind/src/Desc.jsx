import React from "react";

export const Desc = ({ name, description, animal, breed, city, state }) => {
  return (
    <div className="xl:w-1/3 md:w-1/2 p-4">
      <div className="border border-gray-700 p-6 rounded-lg bg-blue-400 shadow-lg ">
        <h1 className="text-black text-3xl">{name} </h1>
        <h2 className="text-md text-gray-900 font-medium title-font mb-2">
          {`${animal} — ${breed} — ${city}, ${state}`}
        </h2>
        <p className="leading-relaxed text-base">{description}</p>
      </div>
    </div>
  );
};
