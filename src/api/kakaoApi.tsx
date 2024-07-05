import API from "../styles/config.tsx";
import {useEffect} from "react";
import * as axios from "axios";
import {AxiosRequestConfig} from "axios";

const defaultConfig: AxiosRequestConfig = {
    headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    }
}

const jsonConfig: AxiosRequestConfig = {
    headers: {
        "Content-Type": "application/json"
    }
}


const MoveKakaoLogin = () => {
    location.href = API.KAKAO_LOGIN
}

const KakaoCallBack = () => {
    useEffect(() => {
        const params = new URL(document.location.toString()).searchParams
        const code = params.get("code")

        axios.post(
            API.KAKAO_LOGIN_AUTH + `&code=${code}`,
            {},
            defaultConfig
        ).then((res) => {
            // todo: send json to server
            axios.post(
                API.SERVER_LOGIN_KAKAO,
                res.data,
                jsonConfig
            ).then((res) => {
                console.log(res)
                location.href = "/"
            }).catch((err) => {
                console.log(err)
            })
        })
    }, [])
    return <></>
}

export default {MoveKakaoLogin, KakaoCallBack}