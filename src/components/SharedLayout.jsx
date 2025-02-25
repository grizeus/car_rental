import { Outlet } from "react-router-dom";
import Container from "./Container";
import Header from "./Header";
import Section from "./Section";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Section>
          <Container>
            <Outlet />
          </Container>
        </Section>
      </main>
      <footer></footer>
    </>
  );
};

export default SharedLayout;
