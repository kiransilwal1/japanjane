"use client";

import { useState } from "react";
import { HamburgerIcon2 } from "./smooth_hamburgers";

const HamburgIcon = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex tablet:hidden">
      <HamburgerIcon2
        isOpen={open}
        size={24}
        onClick={() => setOpen(!open)}
      ></HamburgerIcon2>
    </div>
  );
};

export default HamburgIcon;
