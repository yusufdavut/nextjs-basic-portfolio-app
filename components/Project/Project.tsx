import Image from "next/image";
import React from "react";

export default function Project({ data }: any) {
  return (
    <div className="flex flex-col mb-10 w-[30%] max-md:w-full max-md:items-center">
      <Image
        src={data.image}
        alt="Project Image"
        className="bg-cover mb-2 w-full max-md:w-[70%]"
      />
      <span className="flex gap-1 mb-4">
        {data.categories.map((cat: any) => (
          <span
            key={cat}
            className="text-xs bg-primary text-white p-1 rounded-2xl"
          >
            {cat}
          </span>
        ))}
      </span>
      <p className="font-bold">{data.name}</p>
    </div>
  );
}
