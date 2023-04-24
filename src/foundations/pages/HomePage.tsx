import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { removeQueryMembers } from "../../store/fundations/foundationSlice";
import { QueryForm } from "../components/QueryForm";
import { MembersTable } from "../view/MembersTable";

export const HomePage = () => {
  const { queryMembers } = useAppSelector((state) => state.foundation);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-4xl mb-4 font-semibold">Consultar</h1>
        <NavLink
          onClick={() => {
            dispatch(removeQueryMembers());
          }}
          to="/search/birthday"
          className="bg-black text-white font-bold py-2 px-4 rounded"
        >
          Consultar cumpleaños
        </NavLink>
      </div>
      <QueryForm />
      {queryMembers.length > 0 && <MembersTable rowsValues={queryMembers} />}
    </>
  );
};
