export interface Header {
  field: string;
  headerName: string;
  width?: number;
  flex?: number;
  type:
    | "number"
    | "string"
    | "date"
    | "dateTime"
    | "time"
    | "boolean"
    | "singleSelect"
    | "multiSelect";
  headerAlign: "center" | "left" | "right";
  align: "center" | "left" | "right";
  sortable?: boolean;
  filterable?: boolean;
  disableColumnMenu?: boolean;
  disableReorder?: boolean;
  hide?: boolean;
}

export const headersMembersTable: Header[] = [
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
];
