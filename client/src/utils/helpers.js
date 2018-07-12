
import axios from "axios";

export default {

    addingAnswers: function(answers) {
        // console.log(answers);
        return axios.post("/results", answers);
    },

    getCookies: function(){
        let cookies = document.cookie;
        cookies = cookies.split(",");
        let user = cookies[0];
        user = user.split("=");
        user = user[1];
        user =  user.slice(3);
        user = user.split("%");
        user = user[0];
       
        return user;
    },
    logout: function(){
        return axios.get("/api/auth/logout");
    },
    getResults: function(keys, userID){
        return axios.get(`/results/${userID}`, keys);
    },


};