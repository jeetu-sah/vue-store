// export default function authHeader() {
//   let user = localStorage.getItem("usertoken");
//   if (user) {
//     return {
//       Authorization: "Bearer " + localStorage.getItem("usertoken"),
//       Accept: "application/json",
//     };
//   } else {
//     return {};
//   }
// }


export default {

  authHeader() {
    let user = localStorage.getItem("usertoken");
    if (user){
      return {
        Authorization: "Bearer " + localStorage.getItem("usertoken"),
        Accept: "application/json",
      };
    }else{
      return {};
    }
  },
};