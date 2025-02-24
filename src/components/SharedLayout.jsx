import NavBar from "./NavBar";

const SharedLayout = ({ children }) => {
  return (
    <>
      <header className="bg-solitude w-full border-b border-solitude">
        <div className="mx-auto flex max-w-[1440px] justify-between px-[120px] py-6 sm:min-w-80">
          <p>RentalCar</p>
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
