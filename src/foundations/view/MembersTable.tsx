import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useMembers } from "../../hooks/useMembers";
import { headersMembersTable } from "../data/headersMembersTable";
import { dataTestMembers } from "../data/test/dataTestMembers";
export const MembersTable = () => {
  const { members } = useMembers();
  return (
    <div className="mt-8" style={{ width: "100%" }}>
      <DataGrid
        autoHeight
        rows={dataTestMembers}
        // rows={members}
        columns={headersMembersTable}
        pageSize={6}
        rowsPerPageOptions={[6]}
        getRowId={(row) => row.name}
        components={{ Toolbar: GridToolbar }}
      />
    </div>
  );
};
