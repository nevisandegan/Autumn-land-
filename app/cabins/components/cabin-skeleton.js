import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";

function CabinSkeleton() {
  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div className="grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24">
        <div className="relative  -translate-x-3">
          <Skeleton height={200} />
        </div>

        <div>
          <h3 className="text-accent-100 font-black text-7xl mb-5 translate-x-[-254px] bg-primary-950 p-6 pb-1 w-[150%]">
            <Skeleton />
          </h3>

          <p className="text-lg text-primary-300 mb-10">
            <Skeleton count={5} />
          </p>

          <ul className="flex flex-col gap-4 mb-7">
            <li>
              <Skeleton />
            </li>
            <li>
              <Skeleton />
            </li>
            <li>
              <Skeleton />
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className="text-5xl font-semibold text-center">
          Reserve today. Pay on arrival.
        </h2>
      </div>
    </div>
  );
}

export default CabinSkeleton;
