import iconCart from "../images/icon-cart.svg";
import imgAvatar from "../images/image-avatar.png";
import MenuMobile from "./MenuMobile";

const Header = () => {
  return (
    <header className="flex justify-between h-5 px-6 py-8">
      <div className="flex gap-4 items-center">
        <MenuMobile />
        <h1 className="text-2xl font-bold lowercase justify-center">
          Sneakers
        </h1>
      </div>
      <div className="flex gap-4 items-center">
        <img src={iconCart} alt="cart icon" />
        <img className="h-8" src={imgAvatar} alt="avatar" />
      </div>
    </header>
  );
};

export default Header;
