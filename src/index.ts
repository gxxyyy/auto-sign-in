import { LoginModel } from "./model/login.model";
import * as dotenv from "dotenv";
import { CreditModel } from "./model/credit.model";
import { getCredit, login, sign_in } from "./login";
import { urls } from "./constants";

const main = async () => {
  dotenv.config();
  const loginModel: LoginModel = {
    username: process.env.USERNAME || "",
    password: process.env.PASSWORD || "",
  };
  console.log(loginModel)
  if (loginModel.username === "" || loginModel.password === "") {
    process.exit(1);
  }
  const credit: CreditModel = await getCredit(urls[0]);
  login(urls[0], credit, loginModel);
  sign_in(credit.cookie).then((f) => console.log(f));
};

main().catch((err) => console.error(err));
