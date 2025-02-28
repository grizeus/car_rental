const Footer = () => {
  return (
    <footer className="bg-solitude border-solitude mt-auto w-full border-t">
      <div className="mx-auto flex max-w-[1440px] items-center px-[120px] py-6 sm:min-w-80">
        <span className="text-base">
          &copy; 2025{" "}
          <a
            href="https://github.com/grizeus"
            target="_blank"
            rel="noopener noreferrer">
            grizeus
          </a>{" "}
          &mdash; designed by{" "}
          <a
            href="https://goit.global/ua/"
            target="_blank"
            rel="noopener noreferrer">
            GoIT
          </a>{" "}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
