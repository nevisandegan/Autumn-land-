import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";

function CabinsSkeleton() {
  return (
    <div className="grid grid-cols-12 gap-5 ">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="col-span-6 flex border-primary-800 border rounded-sm"
        >
          <div className="flex-1 relative ">
            <Skeleton height={200} />
          </div>

          <div className="flex-grow">
            <div className="pt-5 pb-4 px-7 bg-primary-950">
              <h3 className="text-accent-500 font-semibold text-2xl mb-3">
                <Skeleton />
              </h3>
            </div>

            <div className="bg-primary-950 border-t border-t-primary-800 text-right">
              <Skeleton />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CabinsSkeleton;
