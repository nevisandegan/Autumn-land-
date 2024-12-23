import React, { Suspense } from "react";
import CabinCard from "./CabinCard";
import CabinSkeleton from "./cabin-skeleton";

const CabinList = async () => {
  const data = await fetch("http://localhost:3000/api/cabins", {
    method: "GET",
  });
  const cabins = await data.json();

  if (cabins.length < 0) return null;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {cabins.data.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
};

export default CabinList;
