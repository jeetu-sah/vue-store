export default function auth(to, from, next) {
    if(localStorage.getItem("usertoken")){
        //this.$forceUpdate();
        return next();
    }else{
        next({ name: "login" });
    }
}
