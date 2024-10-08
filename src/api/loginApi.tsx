import API from "../styles/config.tsx";
import axios from "axios";
import {AxiosRequestConfig} from "axios";
import axiosCookie from "../common/axiosCookie.tsx";
import {useNavigate} from "react-router-dom";


const jsonConfig: AxiosRequestConfig = {
    headers: {
        "Content-Type": "application/json"
    },
}

export const moveKakaoLogin = () => {
    location.href = API.KAKAO_LOGIN
}

export const KakaoCallBack = () => {
    const params = new URL(document.location.toString()).searchParams
    const code = params.get("code")
    const navigate = useNavigate()

    axios.post(
        API.SERVER_LOGIN_KAKAO,
        JSON.stringify({code: code}),
        jsonConfig
    ).then((res) => {
        console.log(res)
        navigate({pathname: '/'}, {replace: true})
    })

    return <></>
}

export const moveNaverLogin = () => {
    location.href = API.NAVER_LOGIN
}

export const moveGoogleLogin = () => {
    location.href = API.GOOGLE_LOGIN
}

export const emailLogin = async (email: string) => {
    return await axios.post(API.EMAIL_LOGIN, {
        email: email,
    })
}

export const emailSignup = async (email: string) => {
    return await axios.post(API.EMAIL_SIGNUP, {
        email: email,
    })
}

export const SignUpCallBack = () => {
    const params = new URL(document.location.toString()).searchParams
    const token = params.get("token")
    const navigate = useNavigate()

    axios.get(
        API.SERVER_LOGIN_KAKAO + '?token=' + token,
    ).then(() => {
        alert("회원가입 되었습니다")
        navigate({pathname: '/'}, {replace: true})
    }).catch(() => {
        alert("오류가 발생했습니다. 나중에 다시 시도해 주세요")
        navigate({pathname: '/'}, {replace: true})
    })

    return <></>
}

export const checkToken = async () => {
    return await axiosCookie.get(`${API.BASE_URL}/token/auth`)
}