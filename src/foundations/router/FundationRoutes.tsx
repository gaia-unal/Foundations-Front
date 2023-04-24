import { useEffect } from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useRedux";
import { useGetFoundationByIdQuery } from "../../store/fundations/foundation.api";
import { setActiveFoundation } from "../../store/fundations/foundationSlice";
import { FoundationForm } from "../components/FoundationForm";
import { FoundationHeader } from "../components/FoundationHeader";
import { StepMembershipForm } from "../components/StepMembershipForm";
import { AboutFoundation } from "../view/AboutFoundation";
import { MembersTable } from "../view/MembersTable";

export const FoundationRoutes = () => {
  const { uid } = useParams();
  const dispatch = useAppDispatch();

  const { data: foundation, isLoading } = useGetFoundationByIdQuery(
    uid as string
  );

  const { members } = foundation || {};
  const actFoundation = {
    identification: foundation?.identification,
    name: foundation?.name,
    address: foundation?.address,
    adminEmail: foundation?.adminEmail,
    phone: foundation?.phone,
    email: foundation?.email,
    logo: foundation?.logo,
    description: foundation?.description,
  };

  useEffect(() => {
    if (!!foundation) {
      const { members = [], ...activeFoundation } = foundation;
      dispatch(setActiveFoundation(activeFoundation));
    }
  }, [foundation]);

  return (
    <>
      <FoundationHeader logo={foundation?.logo} name={foundation?.name} />
      <Routes>
        <Route
          path="/about"
          element={<AboutFoundation activeFoundation={actFoundation} />}
        />
        <Route
          path="/members"
          element={<MembersTable rowsValues={!!members ? members : []} />}
        />
        <Route path="/edit" element={<FoundationForm close={() => {}} />} />
        <Route path="/addmembers" element={<StepMembershipForm />} />
        <Route
          path="*"
          element={<Navigate to={`/foundation/${uid}/about`} />}
        />
      </Routes>
    </>
  );
};
