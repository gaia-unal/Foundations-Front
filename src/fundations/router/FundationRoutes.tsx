import { Navigate, NavLink, Route, Routes, useParams } from "react-router-dom";
import { FundationHeader } from "../components/FundationHeader";
import { AboutFundation } from "../view/AboutFundation";

export const FundationRoutes = () => {
  const { uid } = useParams();
  return (
    <>
      <FundationHeader />
      <Routes>
        <Route path="/about" element={<AboutFundation />} />
        <Route path="/donations" element={<h1>Donaciones</h1>} />
        <Route path="*" element={<Navigate to={`/fundation/${uid}/about`} />} />
      </Routes>
    </>
  );
};
