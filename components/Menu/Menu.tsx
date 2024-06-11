import Link from "next/link";
import React from "react";

import menus from "../../lib/menu.json";

type Props = {};

export default function Menu({}: Props) {
  return (
    <div className="flex max-md:hidden">
      <ul className="flex items-center justify-between gap-3">
        {menus.map((menu) => (
          <li key={menu.id} className="flex">
            <Link
              href={menu.path}
              className="hover:text-primary transition-all duration-300"
            >
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
