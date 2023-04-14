import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { LoadingPage } from "./ui/pages/LoadingPage";

const PublicRouter = lazy(() => import("./router/PublicRouter"));
const PrivateRouter = lazy(() => import("./router/PrivateRouter"));

export const AppRouter = () => {
  const { checkAuth, status } = useAuth();
  checkAuth();
  if (status === "checking") {
    return <LoadingPage />;
  }
  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <div className="h-screen">
          <Routes>
            {status === "authenticated" ? (
              <>
                <Route path="/*" element={<PrivateRouter />} />
              </>
            ) : (
              <Route path="/*" element={<PublicRouter />} />
            )}
          </Routes>
        </div>
      </Suspense>
    </>
  );
};
