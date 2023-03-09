
import { MouseEventHandler } from "react";
// Team interface
export interface ITEAM {
  id: number;
  name: string;
  email: string;
  status: number;
  roles?: RolesEntity[] | null;
  buttons: Buttons;
}
export interface RolesEntity {
  role_id: number;
  role_name: string;
}
export interface Buttons {
  remove?: string | null;
  cancel?: string | null;
  resend?: string | null;
}

// Role interface
export interface IROLE {
  code: number;
  default?: DefaultEntityOrUserCreatedEntity[] | null;
  user_created?: DefaultEntityOrUserCreatedEntity[] | null;
}
export interface DefaultEntityOrUserCreatedEntity {
  id: number;
  name: string;
  buttons: Buttons;
}
export interface Buttons {
  permissions: string;
  clone: string;
}

// Prop interface
export interface IPROPS {
  tableData: DefaultEntityOrUserCreatedEntity[] | ITEAM[];
  columns: string[];
  parentFunction: MouseEventHandler<HTMLButtonElement>;
}
