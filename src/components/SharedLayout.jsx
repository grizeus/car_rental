import NavBar from "./NavBar";
import sprite from "../assets/sprite.svg";

const SharedLayout = ({ children }) => {
  return (
    <>
      <header className="bg-solitude w-full border-b border-solitude">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-[120px] py-6 sm:min-w-80">
          <svg className="w-[104px] h-4">
            <use href={`${sprite}#icon-logo`}></use>
          </svg>
          <NavBar />
        </div>
      </header>
      <main>
        <section className="w-full">
          <div className="mx-auto max-w-[1440px] px-[120px]">{children}</div>
        </section>
      </main>
      <footer></footer>
    </>
  );
};

export default SharedLayout;
