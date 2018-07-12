
import axios from "axios";

export default {

    // is the user logged in?????


    addingAnswers: function(answers) {
        console.log(answers);
        return axios.post("/results", answers);
        // axios.post(`/game/join/${this.state.selectedGameId}`).then(joined => {
        //     t.setState({
        //         joinedGame: joined
        //     });
        //     alert("You have joined the game!");
        // });
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