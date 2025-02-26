import { Link } from "react-router-dom";
import hero from "../assets/img/hero.jpg";
import hero2x from "../assets/img/hero@2x.jpg";
import Container from "../components/Container";
import Header from "../components/Header";
import Section from "../components/Section";

const HomePage = () => {
  return (
    <>
      <Header />
      <Section styles="relative ">
        <div className="mx-auto">
          <picture className="absolute top-0 left-0 h-full w-full">
            <source
              media="(min-width: 320px)"
              srcSet={`${hero} 1x, ${hero2x} 2x`}
            />
            <img
              className="h-full w-full object-cover"
              src={`${hero}`}
              alt="Silver car driving the road in the sunlight"
            />
          </picture>
        </div>
        <Container styles="relative z-1 flex flex-col items-center">
          <h1 className="max-w-[783px] pt-[436px] text-center text-6xl leading-[1.2] font-bold text-white">
            Find your perfect rental car
          </h1>
          <span className="mt-4 mb-10 block text-2xl font-semibold text-white">
            Reliable and budget-friendly rentals for any journey
          </span>
          <Link
            to={"/catalog"}
            className="bg-royal mb-[60px] rounded-xl px-[88px] py-3 text-base leading-tight font-semibold text-white">
            View Catalog
          </Link>
        </Container>
      </Section>
    </>
  );
};

export default HomePage;
