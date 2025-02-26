import { ThreeDots } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className="fixed top-1/2 left-1/2 z-20 h-20 w-20 -translate-x-1/2 -translate-y-1/2">
      <ThreeDots
        height={90}
        width={90}
        radius="9"
        color="#407bff"
        ariaLabel="loading content"
        visible={true}
      />
    </div>
  );
};

export default Loader;
