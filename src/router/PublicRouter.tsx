import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { Register } from "../auth/pages/RegisterPage";
import { useAppSelector } from "../hooks/useRedux";
import { LoadingPage } from "../ui/pages/LoadingPage";

export const PublicRouter = () => {
  const { status } = useAppSelector((state) => state.auth);

  if (status === "checking") {
    return <LoadingPage />;
  }
  return (
    <>
      <div className="grid h-screen place-items-center">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<Navigate to={"/"} />} />
        </Routes>
      </div>
    </>
  );
};
