import axios  from "axios"

export default  axios.create({
    baseURL:"https://instasnapgram-fc93c-default-rtdb.firebaseio.com/",
    headers:{
        "Content-Type" : "application/json"
    }
})