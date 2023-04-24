import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { BirthdayForm } from "../components/BirthdayForm";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { MembersTable } from "../view/MembersTable";
import { removeQueryMembers } from "../../store/fundations/foundationSlice";

export const SearchByBirthday = () => {
  const navigate = useNavigate();
  const { queryMembers } = useAppSelector((state) => state.foundation);
  const dispatch = useAppDispatch();
  const onClickBack = () => {
    navigate(-1);
    dispatch(removeQueryMembers());
  };
  return (
    <>
      <div className="flex items-center gap-3">
        <IoChevronBackOutline
          className="text-3xl text-gray-500 cursor-pointer"
          onClick={onClickBack}
        />
        <h1 className="text-3xl my-2 font-semibold">Consultar cumpleaños</h1>
      </div>
      <BirthdayForm />
      {queryMembers.length > 0 && <MembersTable rowsValues={queryMembers} />}
    </>
  );
};
