import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        
        key: "2790a33e018a439e871eab3b1d26ca01"
    }
})