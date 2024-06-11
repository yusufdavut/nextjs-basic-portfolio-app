import React from "react";

type Props = {};

import AppLogo from "@/public/logo.svg";
import Image from "next/image";

export default function Logo({}: Props) {
  return (
    <div>
      <Image src={AppLogo} alt="Logo" />
    </div>
  );
}
