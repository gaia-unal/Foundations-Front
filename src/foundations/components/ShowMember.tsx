import { useEffect, useState } from "react";
import { BsPencilFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { HiAcademicCap, HiDocumentText } from "react-icons/hi";
import { IoChevronBackOutline } from "react-icons/io5";
import { MdFamilyRestroom } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useRedux";
import { useGetMemberQuery } from "../../store/fundations/foundation.api";
import { setActiveMember } from "../../store/fundations/foundationSlice";
import { LoadingPage } from "../../ui/pages/LoadingPage";
import { AboutItem } from "./memberShowItems/AboutMemberItem";
import { ActivityMemberItem } from "./memberShowItems/ActivityMemberItem";
import { EducationMemberItem } from "./memberShowItems/EducationMemberItem";
import { keysTranslate } from "../../common/data/keyTranslate";

export const ShowMember = () => {
  const [showFamily, setShowFamily] = useState(false);

  const { uid } = useParams();
  const navigate = useNavigate();

  const { data: member, isLoading } = useGetMemberQuery(uid as string);
  const dispatch = useAppDispatch();
  // const { data: member, isLoading } = useGetMemberQuery(uid);

  const {
    family = [],
    education = [],
    activity = [],
    level = [],
    ...memberData
  } = member || {};

  useEffect(() => {
    dispatch(setActiveMember(member));
  }, [member, dispatch]);

  if (isLoading) return <LoadingPage />;

  const onClickShowFamily = () => {
    setShowFamily(!showFamily);
  };
  return (
    <div className="w-full m-2">
      <div className="flex items-center justify-between px-2 mb-4">
        <IoChevronBackOutline
          className="text-3xl text-gray-500 cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <BsPencilFill
          onClick={() => navigate(`/member/edit/${uid}`)}
          className="text-xl cursor-pointer"
        />
      </div>
      <div className="bg-gray-200 p-3 shadow-sm rounded-2xl">
        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
          <FaUserAlt />
          <span className="tracking-wide">Información personal</span>
        </div>
        <div className="text-gray-700">
          <div key={"basicInformation"} className="grid md:grid-cols-2 text-sm">
            {memberData &&
              Object.entries(memberData).map(([key, value]) => (
                <AboutItem
                  key={key + "member"}
                  title={keysTranslate[key as keyof typeof keysTranslate]}
                  value={value}
                />
              ))}
            {Array.isArray(level) &&
              level.map((item, index) => (
                <div
                  key={item.level.toString() + item.date + index}
                  className="col-span-2 grid md:grid-cols-2 "
                >
                  <AboutItem title={"nivel"} value={item.level.toString()} />
                  <AboutItem
                    title={`Fecha de adquisición de nivel ${item.level}`}
                    value={item.date}
                  />
                </div>
              ))}
          </div>
        </div>
        {showFamily ? (
          <>
            <div className="mt-4 flex items-center space-x-2 font-semibold text-gray-900 leading-8">
              <MdFamilyRestroom />
              <span className="tracking-wide">Familia</span>
            </div>
            <div className="text-gray-700">
              <div className="grid md:grid-cols-2 text-sm">
                {family &&
                  family.map((f, index) => (
                    <div
                      key={f.identification + index}
                      className="mb-3 ml-3 border-b-2 border-dotted border-gray-400"
                    >
                      {Object.entries(f).map(([key, value]) => (
                        <AboutItem
                          key={key + "family"}
                          title={
                            keysTranslate[key as keyof typeof keysTranslate]
                          }
                          value={value}
                        />
                      ))}
                    </div>
                  ))}
              </div>
            </div>
          </>
        ) : (
          <button
            onClick={onClickShowFamily}
            className="block bg-gray-300 w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
          >
            Mostrar familiares
          </button>
        )}
      </div>
      <div className="my-4"></div>

      <div className="bg-gray-100 p-3 shadow-sm rounded-xl">
        <div className="grid grid-cols-2">
          <div className="flex items-center flex-col">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
              <HiDocumentText />
              <span className="tracking-wide">Actividades</span>
            </div>
            <div className="list-inside flex items-center flex-col space-y-2 px-8 py-2">
              {activity &&
                activity.map((item, index) => (
                  <ActivityMemberItem
                    key={item.type + index}
                    type={item.type}
                    description={item.description}
                    experience={item.experience}
                  />
                ))}
            </div>
          </div>
          <div className="flex items-center flex-col">
            <div className="flex items-center text-center space-x-2 font-semibold text-gray-900 leading-8">
              <HiAcademicCap />
              <span className="tracking-wide">Educación</span>
            </div>
            <div className="list-inside flex items-center flex-col space-y-2 px-8 py-2">
              {education &&
                education.map((item, index) => (
                  <EducationMemberItem
                    key={item.title + index}
                    title={item.title}
                    completed={item.completed}
                    endDate={item.endDate}
                    startDate={item.startDate}
                    institution={item.institution}
                    level={item.level}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
