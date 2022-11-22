import { Navigate, Route, Routes } from "react-router-dom";
import { FundationRoutes } from "../fundations/router/FundationRoutes";
import { Navbar } from "../ui/components/Navbar";
import { SideBar } from "../ui/components/SideBar";

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
            <Route path="/users" element={<h1>Users</h1>} />
            <Route path="/fundation/:uid/*" element={<FundationRoutes />} />
            <Route path="*" element={<Navigate to="/users" />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default PrivateRouter;
