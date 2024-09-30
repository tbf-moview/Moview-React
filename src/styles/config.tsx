
// development
const BASE_URL = "http://localhost:8080/api"
const BASE_FRONT_URL = "http://localhost:5173"

// deploy
// const BASE_URL = "http://43.202.121.159:8080/api"
// const BASE_FRONT_URL = "https://moview-react.vercel.app"

const KAKAO_REDIRECT_PATH = "/login/kakao"
const KAKAO_REDIRECT_URI = `${BASE_FRONT_URL}${KAKAO_REDIRECT_PATH}`


const API = {

    BASE_URL: BASE_URL,
    BASE_FRONT_URL: BASE_FRONT_URL,

    SERVER_LOGIN_KAKAO: `${BASE_URL}/login/kakao`,
    REVIEW: `${BASE_URL}/review`,
    UPLOAD_IMAGE: `${BASE_URL}/image`,

    KAKAO_LOGIN: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${import.meta.env.VITE_KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}`,
    KAKAO_LOGIN_AUTH: `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${import.meta.env.VITE_KAKAO_REST_API_KEY}&redirect_url=${KAKAO_REDIRECT_URI}&client_secret=${import.meta.env.VITE_KAKAO_CLIENT_SECRET_KEY}`,
    KAKAO_REDIRECT_PATH: KAKAO_REDIRECT_PATH,

    NAVER_LOGIN: "naver_login_url",

    GOOGLE_LOGIN: `http://localhost:8080/oauth2/authorization/google`,

    EMAIL_LOGIN: `${BASE_URL}/login/moview`,
    EMAIL_SIGNUP: `${BASE_URL}/signup/moview`,


    SIGNUP_VERIFY: `${BASE_URL}/login/verify`,
    SIGNUP_REDIRECT_URI: `/verify`,
}

export default API