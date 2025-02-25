const Section = ({ styles = "", children }) => {
  // for home page purpose
  const cssBuilder = `${styles} w-full`;
  return <section className={cssBuilder}>{children}</section>;
};

export default Section;
