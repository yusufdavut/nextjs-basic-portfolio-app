import React from "react";
import menus from "../../lib/menu.json";
import Link from "next/link";
import Image from "next/image";

import CloseSVG from "../../public/close.svg";

export default function MobileMenu({ setOpen }: any) {
  return (
    <div className="md:flex absolute left-0 top-0 w-full min-h-screen justify-center items-center bg-primary z-10">
      <Image
        src={CloseSVG}
        alt="Close"
        width={50}
        height={50}
        className="absolute right-3 top-3"
        onClick={() => setOpen(false)}
      />
      <ul className="flex flex-col items-center justify-center h-screen">
        {menus.map((menu) => (
          <li key={menu.id} className="flex font-black text-5xl mb-10">
            <Link onClick={() => setOpen(false)} href={menu.path}>
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
