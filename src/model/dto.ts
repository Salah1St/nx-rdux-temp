import { Role } from "./enum";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  username: string;
  password: string;
  role: Role;
};
