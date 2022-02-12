import axios from "axios";
import API from "../api/api.json";
import Helper from "../helper/helper";

export default function guest(to, from, next) {
  if (localStorage.getItem("usertoken")) {
    console.log("login working");
    var loginToken = localStorage.getItem("usertoken");
    var userCheckLogin =
      process.env.VUE_APP_SERVER_URL + API.post.user_check_login;
    axios
      .post(
        userCheckLogin,
        { user_token: loginToken },
        {
          headers: Helper.authHeader(),
        }
      )
      .then((response) => {
        console.log("response");
        console.log(response);
        return next({ name: "admin.dashboard" });
      })
      .catch(function() {
        console.log("catch methos");
        localStorage.removeItem("usertoken");
      });
  } else {
    return false;
  }
}
