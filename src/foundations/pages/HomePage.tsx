import { useAppSelector } from "../../hooks/useRedux";
import { QueryForm } from "../components/QueryForm";
import { MembersTable } from "../view/MembersTable";

export const HomePage = () => {
  const { queryMembers } = useAppSelector((state) => state.foundation);
  return (
    <>
      <h1 className="text-4xl mb-4 font-semibold">Consultar</h1>
      <QueryForm />
      {queryMembers.length > 0 && <MembersTable rowsValues={queryMembers} />}
    </>
  );
};
