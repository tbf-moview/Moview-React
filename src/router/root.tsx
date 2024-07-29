import {Suspense} from "react";
import {createBrowserRouter} from "react-router-dom";
import API from "../styles/config.tsx";
import {KakaoCallBack, SignUpCallBack} from "../api/loginApi.tsx";
import Loading from "../components/common/Loading.tsx";
import {Main, Setting} from "./pages.tsx";
import reviewRouter from "./reviewRouter.tsx";

const root = createBrowserRouter([
    {
        path: '',
        element: <Suspense fallback={Loading}><Main/></Suspense>
    },
    {
        path: API.KAKAO_REDIRECT_PATH,
        element: <Suspense fallback={Loading}><KakaoCallBack/></Suspense>
    },
    {
        path: API.SIGNUP_REDIRECT_URI,
        element: <Suspense fallback={Loading}><SignUpCallBack/></Suspense>
    },
    {
        path: "/review",
        children: reviewRouter()
    },
    {
        path: '/setting',
        element: <Suspense fallback={Loading}><Setting/></Suspense>
    },
])

export default root;