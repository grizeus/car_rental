import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./SharedLayout";

const HomePage = lazy(() => import("../pages/HomePage"));
const CatalogPage = lazy(() => import("../pages/CatalogPage"));
const DetailsPage = lazy(() => import("../pages/DetailsPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

const App = () => {
  return (
    <SharedLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<DetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </SharedLayout>
  );
};

export default App;
