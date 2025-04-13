import axios from "axios";
import { API_URL } from "../utils/constants";

interface LoginData {
  email: string;
  password: string;
}

interface SignupData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
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

const signupService = async (signupData: SignupData) => {
  try {
    const { data, status } = await axios.post(
      `${API_URL}/auth/signup`,
      signupData
    );
    if (status === 200) return data;
  } catch (err) {
    console.error("signup failed", err);
    throw err;
  }
};

export { loginService, signupService };
