import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "../../pages/AboutPage";
import HomePage from "../../pages/HomePage";
import ProductDetailPage from "../../pages/ProductDetailPage";
import NavBar from "../NavBar";

function MainRouter() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/homepage"} element={<HomePage />} />
          <Route
            path={"/productdetailpage/:id"}
            element={<ProductDetailPage />}
          />
          <Route path={"/aboutpage"} element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MainRouter;
