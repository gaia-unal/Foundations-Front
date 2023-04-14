import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { AiFillDelete } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import { IoMdArrowUp } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  useDeleteMemberMutation,
  useLevelupMemberMutation,
} from "../../store/fundations/foundation.api";
import { Header } from "../data/headersMembersTable";
import { BasicInformationMember } from "../interface/basicInformationMember.interface";

interface MembersTableProps {
  rowsValues: BasicInformationMember[];
}

export const MembersTable = ({ rowsValues }: MembersTableProps) => {
  const navigate = useNavigate();

  const [deleteMember, { isSuccess: isDeletedMember }] =
    useDeleteMemberMutation();

  const [levelUpMember, { isSuccess: isLevelUpMember }] =
    useLevelupMemberMutation();

  const columns: Header[] = [
    {
      field: "name",
      headerName: "Nombre",
      // width: 170,
      flex: 1,
      type: "string",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "lastName",
      headerName: "Apellido",
      // width: 170,
      flex: 1,
      type: "string",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "identification",
      headerName: "Identificación",
      // width: 170,
      flex: 1,
      type: "string",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "address",
      headerName: "Dirección",
      // width: 170,
      flex: 1,
      type: "string",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "phone",
      headerName: "Teléfono",
      // width: 170,
      flex: 1,
      type: "number",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "email",
      headerName: "Email",
      // width: 170,
      flex: 1,
      type: "string",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "birthDate",
      headerName: "Fecha de nacimiento",
      flex: 1,
      type: "date",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "level",
      headerName: "Nivel",
      flex: 1,
      type: "string",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "actions",
      type: "actions",
      getActions: (params: any) => [
        <GridActionsCellItem
          icon={<FiMoreHorizontal className="text-blue-600 text-lg" />}
          label="Ver más"
          onClick={() => {
            navigate("/member/" + params.id);
          }}
          showInMenu={true}
        />,
        <GridActionsCellItem
          icon={<AiFillDelete className="text-red-600 text-lg" />}
          label="Eliminar"
          onClick={() => {
            onClickDelete(params.id);
          }}
          showInMenu={true}
        />,
        <GridActionsCellItem
          icon={<IoMdArrowUp className="text-black font-bold text-lg" />}
          label="Subir Nivel"
          onClick={() => {
            onClickLevelup(params.id, params.row.level);
          }}
          showInMenu={true}
        />,
      ],
    },
  ];

  const onClickLevelup = (id: string, level: number) => {
    if (level === 3) {
      Swal.fire({
        title: "El miembro ya esta en el nivel máximo",
        icon: "warning",
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ok",
      });
    } else {
      Swal.fire({
        title: "¿Estás seguro?",
        text: "El miembro subirá de nivel",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, subir",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          levelUpMember(id);
        }
      });
    }
  };

  const onClickDelete = (id: string) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMember(id);
      }
    });
  };

  return (
    <div className="mt-8 w-full">
      <DataGrid
        autoHeight
        rows={rowsValues}
        // columns={headersMembersTable}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[6]}
        getRowId={(row) => (row.id ? row.id : row.email)}
        components={{ Toolbar: GridToolbar }}
      />
    </div>
  );
};
