import {Suspense} from "react";
import {createBrowserRouter} from "react-router-dom";
import API from "../styles/config.tsx";
import {KakaoCallBack, SignUpCallBack} from "../api/loginApi.tsx";
import Loading from "../components/common/Loading.tsx";
import {Main, ReviewDetail, ReviewEdit, ReviewFollow, ReviewMy, ReviewSearch, ReviewWrite, Setting} from "./pages.tsx";

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
        path: '/review/write',
        element: <Suspense fallback={Loading}><ReviewWrite/></Suspense>
    },
    {
        path: '/review/edit/:id',
        element: <Suspense fallback={Loading}><ReviewEdit/></Suspense>
    },
    {
        path: '/review/search',
        element: <Suspense fallback={Loading}><ReviewSearch/></Suspense>
    },
    {
        path: '/review/:id',
        element: <Suspense fallback={Loading}><ReviewDetail/></Suspense>
    },
    {
        path: '/review/my',
        element: <Suspense fallback={Loading}><ReviewMy/></Suspense>
    },
    {
        path: '/review/follow',
        element: <Suspense fallback={Loading}><ReviewFollow/></Suspense>
    },
    {
        path: '/setting',
        element: <Suspense fallback={Loading}><Setting/></Suspense>
    },
])

export default root;