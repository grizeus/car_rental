import { useParams } from "react-router-dom";
import CarDetails from "../components/CarDetails";
import ContactForm from "../components/ContactForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarById } from "../redux/cars/operations";
import { selectCurrent } from "../redux/cars/selectors";

const DetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCarById(id));
  }, [dispatch, id]);
  const details = useSelector(selectCurrent);
  return (
    <div className="flex gap-x-18 pt-21 pb-26">
      <div className="flex flex-col gap-10">
        <div className="h-128 w-160 overflow-hidden rounded-[14px]">
          <img src={details.img} alt="car" className="h-full object-cover" />
        </div>
        <ContactForm />
      </div>
      <CarDetails details={details} />
    </div>
  );
};

export default DetailsPage;
