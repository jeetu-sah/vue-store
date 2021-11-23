export default function auth(to, from, next) {
    if(localStorage.getItem("usertoken")){
        return next();
    }else{
        next({ name: "login" });
    }
}
