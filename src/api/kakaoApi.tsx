import API from "../styles/config.tsx";
import axios from "axios";
import {AxiosRequestConfig} from "axios";


const jsonConfig: AxiosRequestConfig = {
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true
}

export const MoveKakaoLogin = () => {
    location.href = API.KAKAO_LOGIN
}

export const KakaoCallBack = () => {
    const params = new URL(document.location.toString()).searchParams
    const code = params.get("code")

    axios.post(
        API.SERVER_LOGIN_KAKAO,
        JSON.stringify({code: code}),
        jsonConfig
    ).then((res) => {
        console.log(res)
        location.replace("/")
    })
    return <></>

}