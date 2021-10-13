import { useState } from "react";
import iconMenu from "../images/icon-menu.svg";
import iconMenuX from "../images/icon-close.svg";

const MenuMobile = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="flex">
      <img
        className={
          menu === true ? "flex z-10 animate-fade-to-right" : "flex z-10"
        }
        src={menu === true ? iconMenuX : iconMenu}
        alt="menu icon"
        onClick={handleMenu}
      />
      {menu === true ? (
        <div className="animate-fade-to-right absolute top-0 left-0 px-4 pt-16 py-6 h-full w-2/3 bg-white">
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      ) : undefined}
    </div>
  );
};

export default MenuMobile;
