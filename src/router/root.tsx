import {lazy, Suspense} from "react";
import {createBrowserRouter} from "react-router-dom";
import API from "../styles/config.tsx";
import {KakaoCallBack} from "../api/kakaoApi.tsx";
import Loading from "../components/Loading.tsx";

const Main = lazy(() => import('../pages/MainPage'))
const ReviewWrite = lazy(() => import('../pages/review/WritePage'))
const ReviewSearch = lazy(() => import('../pages/review/SearchPage'))

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
    },
    {
        path: '/review/search',
        element: <Suspense fallback={Loading}><ReviewSearch/></Suspense>
    }
])

export default root;