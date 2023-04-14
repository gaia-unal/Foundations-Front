export interface Header {
  field: string;
  headerName?: string;
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
    | "multiSelect"
    | "actions";

  getActions?: (params: any) => JSX.Element[];
  headerAlign?: "center" | "left" | "right";
  align?: "center" | "left" | "right";
  sortable?: boolean;
  filterable?: boolean;
  disableColumnMenu?: boolean;
  disableReorder?: boolean;
  hide?: boolean;
}
