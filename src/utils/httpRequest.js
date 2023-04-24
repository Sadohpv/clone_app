import axios from "axios";


const request = axios.create({
    baseURL : process.env.REACT_APP_BASE_URL,
})

export const get = async (pathApi, option = {}) =>{
    const response = await request.get(pathApi, option);
    return response.data;
}

export default request;