import React, { Suspense } from "react";
import CabinCard from "./CabinCard";
import CabinSkeleton from "./cabins-skeleton";
import connectDb from "@/app/_lib/connectDB";

const CabinList = async ({ filter }) => {
  const data = await fetch("http://localhost:3000/api/cabins", {
    cache: "no-store",
  });
  const cabins = await data.json();

  let displayedCabins = cabins.data;

  switch (filter) {
    case "all":
      displayedCabins = cabins.data;
      break;
    case "small":
      displayedCabins = cabins.data.filter((item) => item.maxCapacity <= 3);
      break;
    case "medium":
      displayedCabins = cabins.data.filter(
        (item) => item.maxCapacity <= 7 && item.maxCapacity >= 4
      );
      break;
    case "large":
      displayedCabins = cabins.data.filter((item) => item.maxCapacity >= 8);
      break;
  }

  if (cabins.length < 0) return null;

  return (
    <div className="relative grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayedCabins.length ? (
        displayedCabins.map((cabin) => (
          <CabinCard cabin={cabin} key={cabin.id} />
        ))
      ) : (
        <p className="text-center mt-5 w-full absolute">
          there is no cabins :(
        </p>
      )}
    </div>
  );
};

export default CabinList;
