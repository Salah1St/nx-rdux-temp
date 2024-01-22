import { User } from "./dto";
// =============================== DTO
// =============================== AUTH RESPONSE

export interface LoginResponseApi {
  token: string;
  user: User;
}
export interface RememberMeApi {
  user: User;
}
// =============================== USER RESPONSE
export interface RegisterUserResponseApi {
  token: string;
  user: User;
}
