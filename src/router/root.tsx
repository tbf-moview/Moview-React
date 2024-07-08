import {lazy, Suspense} from "react";
import {createBrowserRouter} from "react-router-dom";
import API from "../styles/config.tsx";
import {KakaoCallBack} from "../api/kakaoApi.tsx";

const Loading = <div>Loading...</div>
const Main = lazy(() => import('../pages/MainPage'))
const ReviewWrite = lazy(() => import('../pages/review/WritePage'))

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
        path: '/review/write',
        element: <Suspense fallback={Loading}><ReviewWrite/></Suspense>
    }
])

export default root;