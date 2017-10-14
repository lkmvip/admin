let baseUrl = "/";
import $ from "jquery";
let utils = {
    baseUrl,
    post(url,data){
        return new Promise((resolve,reject) => {
            $.ajax({
                method:"post",
                url:baseUrl + url,
                data:data,
                success(data){
                    resolve(data);
                },
                error(err){
                    reject(err);
                }
            });
        });
    },
    tip(data){

    },
    time(t,type){
        if(!t) return "";
        t = new Date(Number(t));
        let year = t.getFullYear();
        let month = t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1;
        let day = t.getDate() < 10 ? "0" + t.getDate() : t.getDate();
        let hour = t.getHours() < 10 ? "0" + t.getHours() : t.getHours();
        let minute = t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes();
        let second = t.getSeconds() < 10 ? "0" + t.getSeconds() : t.getSeconds();
        if(type === 1) return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
    }
};
export default {
    install(Vue){
        Vue.prototype.zd = utils;
    }
}