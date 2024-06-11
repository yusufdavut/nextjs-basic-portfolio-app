"use client";
import React, { useState } from "react";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import MobileMenu from "../Menu/MobileMenu";

import menuSVG from "../../public/menu.svg";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <header className="flex justify-between p-5 border-b">
      <Logo />
      <Menu />
      <Image
        src={menuSVG}
        alt="menu"
        className="max-md:flex justify-center items-center hidden"
        width={40}
        height={40}
        onClick={() => setOpen(true)}
      />
      {open && <MobileMenu setOpen={setOpen} />}
    </header>
  );
}
