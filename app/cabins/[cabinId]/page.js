import { Suspense } from "react";

import CabinSkeleton from "../components/cabin-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import CabinId from "../components/cabin-id";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const data = await fetch(
    `http://localhost:3000/api/cabin/${params.cabinId}`,
    {
      cache: "no-store",
    }
  );
  
  const name = await data
    .json()
    .then((data) => data.data.name)
    .catch(() => {
      notFound();
    });

  return {
    title: `Cabin ${name}`,
  };
}

export default async function Page({ params }) {
  const { cabinId } = params;

  return (
    <Suspense fallback={<CabinSkeleton />}>
      <CabinId cabinId={cabinId} />
    </Suspense>
  );
}
