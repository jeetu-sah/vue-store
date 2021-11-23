export default function auth(to, from, next) {
  if (localStorage.getItem("usertoken")) {
    next({ name: "admin.dashboard" });
  } else {
    return false;
  }
}
