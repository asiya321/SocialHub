import { ILogin } from "interfaces/auth";
import client from "./client.services";
import API_URLS from "./endPoints.config";

async function login(Req: ILogin): Promise<any> {
  // interface will create for response in interface folder
  return client.post(API_URLS.LOGIN, {
    email: Req.email,
    password: Req.password,
  });
}

const logout = () => {
  localStorage.removeItem("user");
};

export { login, logout };
