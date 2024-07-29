"use client";

import { useState } from "react";
import LaunchesMenu from "./menus/launches-menu";
import Link from "next/link";
import CommunityMenu from "./menus/community-menu";
import AboutMenu from "./menus/about-menu";

const Menu = () => {
  const [showLaunchesMenu, setShowLaunchesMenu] = useState(false);
  const [showCommunityMenu, setShowCommunityMenu] = useState(false);
  const [showAboutMenu, setShowAboutMenu] = useState(false);

  return (
    <div className="hidden lg:flex items-center relative">
      <div className="space-x-6 text-gray-600 text-sm flex items-center cursor-pointer">
       

        <Link href={"/categories"} className="hover:text-[#444ce7]">
          Categories
        </Link>

        

        
      </div>
    </div>
  );
};

export default Menu;
