import { Navigate, NavLink, Route, Routes, useParams } from "react-router-dom";
import { FoundationHeader } from "../components/FoundationHeader";
import { AboutFoundation } from "../view/AboutFoundation";

export const FoundationRoutes = () => {
  const { uid } = useParams();
  return (
    <>
      <FoundationHeader />
      <Routes>
        <Route path="/about" element={<AboutFoundation />} />
        <Route path="/donations" element={<h1>Donaciones</h1>} />
        <Route
          path="*"
          element={<Navigate to={`/foundation/${uid}/about`} />}
        />
      </Routes>
    </>
  );
};
