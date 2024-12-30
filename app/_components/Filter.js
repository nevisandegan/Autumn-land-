"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React from "react";

const Filter = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const filterCode = [
    { code: "all", label: "All" },
    { code: "small", label: "1-3 guests" },
    { code: "medium", label: "4-7 guests" },
    { code: "large", label: "8-12 guests" },
  ];

  const activeFilter = searchParams.get("capacity") ?? "all";

  const handleFilter = (code) => {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", code);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  };

  return (
    <>
      {filterCode.map((item, index) => (
        <button
          key={index}
          className={`mb-3 rounded-sm hover:bg-gray-500 border border-gray-500 px-2 py-1 ml-2 ${
            activeFilter === item.code && "bg-gray-200 text-gray-800"
          } `}
          onClick={() => handleFilter(item.code)}
        >
          {item.label}
        </button>
      ))}
    </>
  );
};

export default Filter;
