import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useAppSelector } from "./hooks/useRedux";
import { LoadingPage } from "./ui/pages/LoadingPage";

const PublicRouter = lazy(() => import("./router/PublicRouter"));
const PrivateRouter = lazy(() => import("./router/PrivateRouter"));

export const AppRouter = () => {
  const { status } = useAppSelector((state) => state.auth);
  if (status === "checking") {
    return <LoadingPage />;
  }
  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          {status === "authenticated" ? (
            <>
              <Route path="/*" element={<PrivateRouter />} />
            </>
          ) : (
            <Route path="/*" element={<PublicRouter />} />
          )}
        </Routes>
      </Suspense>
    </>
  );
};
