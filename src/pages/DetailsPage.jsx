import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CarDetails from "../components/CarDetails";
import ContactForm from "../components/ContactForm";
import { fetchCarById } from "../redux/cars/operations";
import { selectCurrent, selectLoading } from "../redux/cars/selectors";
import Loader from "../components/Loader";

const DetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchCarById(id));
    }
  }, [dispatch, id]);
  const isLoading = useSelector(selectLoading);
  const details = useSelector(selectCurrent);

  return !isLoading && details ? (
    <div className="flex gap-x-18 px-30 pt-21 pb-26">
      <div className="flex flex-col gap-10">
        <div className="h-128 w-160 overflow-hidden rounded-[14px]">
          <img src={details.img} alt="car" className="h-full object-cover" />
        </div>
        <ContactForm />
      </div>
      <CarDetails details={details} />
    </div>
  ) : (
    <Loader />
  );
};

export default DetailsPage;
