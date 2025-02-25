import NavBar from "./NavBar";
import sprite from "../assets/sprite.svg";

const Header = () => {
  return (
    <header className="bg-solitude border-solitude w-full border-b">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-[120px] py-6 sm:min-w-80">
        <svg className="h-4 w-[104px]">
          <use href={`${sprite}#icon-logo`}></use>
        </svg>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
