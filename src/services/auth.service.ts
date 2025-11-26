import { API_URLS } from "@/config/configURL";
import { ILogIn, ILoginResponse } from "@/interface/user";
import axios, { AxiosResponse } from "axios";

// W<Comment>---------={ Log In AxiosResponse }=----------</Comment>
export function login(data: ILogIn): Promise<ILoginResponse> {
  return new Promise(async (resolve, reject) => {
    try {
      const resp = await axios.post<any, AxiosResponse<ILoginResponse>>(
        API_URLS.auth.login(),
        {
          email: data.email,
          password: data.password,
        }
      );
      resolve(resp.data);
    } catch (error: any) {
      reject(error.response.data.message || "Something went wrong");
    }
  });
}
