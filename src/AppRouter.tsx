import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useCheckAuth } from "./hooks/useCheckAuth";
import { LoadingPage } from "./ui/pages/LoadingPage";

const PublicRouter = lazy(() => import("./router/PublicRouter"));
const PrivateRouter = lazy(() => import("./router/PrivateRouter"));

export const AppRouter = () => {
  const status = useCheckAuth();
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
