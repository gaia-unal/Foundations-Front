import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { RecoveryPage } from "../auth/pages/RecoveryPage";
import { Register } from "../auth/pages/RegisterPage";

export const PublicRouter = () => {
  return (
    <>
      <div className="grid h-screen place-items-center">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recovery" element={<RecoveryPage />} />
          <Route path="/*" element={<Navigate to={"/"} />} />
        </Routes>
      </div>
    </>
  );
};

export default PublicRouter;
