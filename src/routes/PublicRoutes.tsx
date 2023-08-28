import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Layout from "../layout/Layout";
import BeatBuddy from "../pages/BeatBuddy";

function PublicRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beat-buddy" element={<BeatBuddy />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default PublicRoutes;
