import { Navigate, Route, Routes } from "react-router-dom";
import { FoundationRoutes } from "../foundations/router/FundationRoutes";
import { Navbar } from "../ui/components/Navbar";
import { SideBar } from "../ui/components/SideBar";
import { HomePage } from "../foundations/pages/HomePage";

export const PrivateRouter = () => {
  return (
    <>
      <Navbar />
      <div className="w-full flex gap-4">
        <div className="w-1/5 m-4">
          <SideBar />
        </div>
        <div className="w-4/5 m-4 py-4 px-6 rounded-xl bg-secondary">
          <Routes>
            <Route path="/users" element={<HomePage />} />
            <Route path="/foundation/:uid/*" element={<FoundationRoutes />} />
            <Route path="*" element={<Navigate to="/users" />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default PrivateRouter;
