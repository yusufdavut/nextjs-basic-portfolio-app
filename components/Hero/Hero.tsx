"use client";
import Image from "next/image";
import React from "react";

import { TypeAnimation } from "react-type-animation";

import HeroImage from "../../public/hero.svg";
import { Button } from "../ui/button";

import { useRouter } from "next/navigation";

import { motion } from "framer-motion";

export default function Hero() {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center w-full py-10 mb-[100px] max-md:flex-col max-md:py-8 max-md:text-center">
      <div className="flex flex-col w-1/2 max-md:w-full max-md:mb-10">
        <div>
          <h2 className="text-3xl font-black mb-3">
            Hi! My name is Yusuf DAVUT
          </h2>
        </div>
        <div className="flex items-end mb-10 max-md:mb-6 max-md:justify-center">
          <h1 className="text-3xl font-semibold mr-2 max-md:text-xl">I am</h1>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Front End Developer",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "UX/UI Designer",
              1000,
              "Mobile App Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="text-primary font-bold text-5xl max-md:text-2xl"
            repeat={Infinity}
          />
        </div>
        <div className="flex w-[400px] gap-5 items-center max-md:justify-center max-md:w-full">
          <Button onClick={() => router.push("/projects")}>Download CV</Button>
          <Button onClick={() => router.push("/contact")}>Contact Me</Button>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex w-1/2 py-5 max-md:w-full"
      >
        <Image src={HeroImage} alt="Hero Image" />
      </motion.div>
    </div>
  );
}
