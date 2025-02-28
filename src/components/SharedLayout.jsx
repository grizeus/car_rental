import { Outlet } from "react-router-dom";
import Container from "./Container";
import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";

const SharedLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Section>
          <Container>
            <Outlet />
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default SharedLayout;
