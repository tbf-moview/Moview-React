import axios from "axios";
import {getCookie} from "./cookie.tsx";

axios.defaults.withCredentials = true

export default axios.create({
    headers: {
        accessToken: await getCookie('accessToken'),
        refreshToken: await getCookie('refreshToken'),
        withCredentials: true
    },
})