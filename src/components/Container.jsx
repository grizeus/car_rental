const Container = ({ styles = "", children }) => {
  // for home page purpose
  const cssBuilder = `${styles} mx-auto max-w-[1440px] px-[120px]`;
  return <div className={cssBuilder}>{children}</div>;
};

export default Container;
