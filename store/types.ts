export interface AuthUser {
  uid: string;
}

export interface StateType {
  authUser: AuthUser | null;
}