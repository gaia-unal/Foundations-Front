import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../auth/pages/LoginPage";
import { Register } from "../auth/pages/RegisterPage";

export const PublicRouter = () => {
  return (
    <>
      <div className="grid h-screen place-items-center">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<Navigate to={"/"} />} />
        </Routes>
      </div>
    </>
  );
};
