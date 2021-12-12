export default function guest(to, from, next) {
  if (localStorage.getItem("usertoken")) {
     return next({ name: "admin.dashboard" });
  } else {
    return false;
  }
}
