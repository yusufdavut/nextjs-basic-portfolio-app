"use client";
import React from "react";
import ProductManagerAvatar from "../../public/product-manager.svg";
import DeveloperAvatar from "../../public/developer.svg";
import DirectorAvatar from "../../public/director.svg";
import Image from "next/image";
import PageTitle from "../PageTitle/PageTitle";

const testimonialsData = [
  {
    id: 1,
    avatar: ProductManagerAvatar,
    name: "Chris Martin",
    title: "Product Manager",
    message: "Lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    avatar: DeveloperAvatar,
    name: "Alex Evans",
    title: "Full Stack Developer",
    message: "Lorem ipsum dolor sit amet",
  },
  {
    id: 3,
    avatar: DirectorAvatar,
    name: "Jade Glen",
    title: "Director",
    message: "Lorem ipsum dolor sit amet",
  },
];

export default function Testimonials() {
  return (
    <div className="w-full flex flex-col mb-[100px]">
      <PageTitle title="Testimonials" />
      <div className="w-full flex items-center justify-center gap-10 max-md:flex-col">
        {testimonialsData.map((item) => (
          <div
            key={item.id}
            className="w-[350px] flex flex-col items-center bg-slate-50 p-5 rounded-lg shadow-md 
            hover:scale-110 transition-all duration-300 cursor-pointer
            max-md:w-[95%]"
          >
            <Image
              src={item.avatar}
              alt={item.name}
              width={50}
              height={50}
              className="mb-5"
            />
            <h2 className="font-black text-2xl text-primary">{item.name}</h2>
            <p className="font-extralight italic mb-5">{item.title}</p>
            <span>{item.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
