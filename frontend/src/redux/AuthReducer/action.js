import axios from "axios";
import { setToast } from "../Utils/tost";
import * as data from "./actionTypes";
import jwt from "jwt-decode"

const signUp = (payload, toast, navigate) => (dispatch) => {
  dispatch({ type: data.SIGNUP_FAILURE });
  return axios
    .post("https://worrisome-tick-tights.cyclic.app/users/register", payload)
    .then((res) => {
      console.log(res);
      // setToast(toast, "Signup Successful", "success");
      setToast(toast, "Signup Successful", "success");

      dispatch({ type: data.SIGNUP_SUCCESS, payload: res.data });
      navigate("/login");
    })
    .catch((err) => {
      setToast(toast, err.response.data.message, "error");
      dispatch({ type: data.SIGNUP_FAILURE, payload: err });
    });
};

 function parseJwt(token) {

     return  jwt(token)
}
const LoginUser = (payload, toast, navigate) => (dispatch) => {
  dispatch({ type: data.LOGIN_REQUEST });
  return axios
    .post("https://worrisome-tick-tights.cyclic.app/users/login", payload)
    .then((res) => {
      console.log(res);
      const token = res.data.token;
     let response= parseJwt(token);
     console.log(token)
     console.log(response)

      localStorage.setItem("token",token)
      localStorage.setItem("userId", response.userId)
      localStorage.setItem("isAdmin", response.isAdmin)
   
      setToast(toast, "Login Successfully", "success");
      dispatch({ type: data.LOGIN_SUCCESS, payload: res.data });
  
      navigate("/");
    })
    .catch((err) => {
      // setToast(toast, err.response.data.message, "error");
      dispatch({ type: data.LOGIN_FAILURE, payload: err });
    });
};
export { signUp, LoginUser };
