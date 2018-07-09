
import axios from "axios";

export default {

    // is the user logged in?????


// axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
// axios.get('/api/person')
//     .then(res => {
//         this.setState({ persons: res.data });
//         console.log(this.state.persons);

//     })
//     .catch((error) => {
//         if (error.response.status === 401) {
//             this.props.history.push("/login");
//         }
//     });

// 

    addingAnswers: function(answers) {
        console.log(answers);
        return axios.post("/api/person/test", answers);
        // axios.post(`/game/join/${this.state.selectedGameId}`).then(joined => {
        //     t.setState({
        //         joinedGame: joined
        //     });
        //     alert("You have joined the game!");
        // });
    },
    getCookies: function(){
        let cookies = document.cookie;
        cookies = cookies.split(",")
        let user = cookies[0];
        user = user.split("=");
        user = user[1]
        user =  user.slice(3);
        user = user.split("%");
        user = user[0]
       
        return user;
    },
    logout: function(){
        return axios.get("/api/auth/logout");
    },
    getResults: function(userID){
        return axios.get(`/api/person/results/${userID}`);
    }

};