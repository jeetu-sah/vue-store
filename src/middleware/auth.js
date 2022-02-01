import axios from "axios";
import API from "../api/api.json";
import Helper from "../helper/helper";

export default function auth(to, from, next) {
  if (localStorage.getItem("usertoken")) {
    //this.$forceUpdate();
    var loginToken = localStorage.getItem("usertoken");
    var userCheckLogin = process.env.VUE_APP_SERVER_URL + API.post.user_check_login;
    //check auth.
    axios
      .post(
        userCheckLogin,
        { user_token: loginToken },
        {
          headers: Helper.authHeader(),
        }
      )
      .then((response) => {
        if (response.data.status == 200) {
          return next();
        } else {
          next({ name: "login" });
        }
      })
      .catch(function() {
        next({ name: "login" });
      });
  } else {
    next({ name: "login" });
  }
}
