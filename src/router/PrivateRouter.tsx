import { Navigate, Route, Routes } from "react-router-dom";
import { FoundationRoutes } from "../foundations/router/FundationRoutes";
import { Navbar } from "../ui/components/Navbar";
import { SideBar } from "../ui/components/SideBar";
import { HomePage } from "../foundations/pages/HomePage";
import { ShowMember } from "../foundations/components/ShowMember";
import { StepMembershipForm } from "../foundations/components/StepMembershipForm";

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
            {/* <Route path="/users" element={<ShowMember />} /> */}
            <Route path="/foundation/:uid/*" element={<FoundationRoutes />} />
            <Route path="/member/:uid" element={<ShowMember />} />
            <Route path="/member/edit/:uid" element={<StepMembershipForm />} />
            <Route path="*" element={<Navigate to="/users" />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default PrivateRouter;
