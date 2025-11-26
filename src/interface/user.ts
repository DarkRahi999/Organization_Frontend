// W<Comment>---------={ Log In Interface }=----------</Comment>
export interface ILogIn {
  email: string;
  password: string;
}
export interface ILoginResponse {
  id: number;
  name: string;
  email: string;
  access_token: string;
}
