import axios from "axios";
import { API_URL } from "../utils/constants";

interface LoginData {
  email: string;
  password: string;
}

const loginService = async (loginData: LoginData) => {
  try {
    const { data, status } = await axios.post(
      `${API_URL}/auth/login`,
      loginData
    );
    if (status === 200) return data;
  } catch (err) {
    console.error("Login failed", err);
    throw err;
  }
};

const signupService = async (data) => {
  console.log("Signup data", data);
};

export { loginService, signupService };
