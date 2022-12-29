import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { FoundationHeader } from "../components/FoundationHeader";
import { StepMembershipForm } from "../components/StepMembershipForm";
import { AboutFoundation } from "../view/AboutFoundation";
import { MembersTable } from "../view/MembersTable";

export const FoundationRoutes = () => {
  const { uid } = useParams();
  return (
    <>
      <FoundationHeader />
      <Routes>
        <Route path="/about" element={<AboutFoundation />} />
        <Route path="/members" element={<MembersTable />} />
        <Route path="/addmembers" element={<StepMembershipForm />} />
        <Route
          path="*"
          element={<Navigate to={`/foundation/${uid}/about`} />}
        />
      </Routes>
    </>
  );
};
