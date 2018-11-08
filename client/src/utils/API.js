import axios from "axios";

export default {
    getAnswersByUID: function (id) {
        return axios.get("/api/users/" + id)
    },
    getAll: function(){
        return axios.get("/all", function(){
            console.log('HItting get route');
        })
    },
    getAnswersByQuest: function (userAnswer) {
        return axios.get("api/users/answers", userAnswer)
    },
    saveAnswers: function (userAnswer) {
        return axios.post("api/users/answers", userAnswer)
            .then(console.log(userAnswer))
            .catch(err => console.log(err))
    },
    updateAnswer: function (id) {
        return axios.post("api/answers/" + id)
    }
}

