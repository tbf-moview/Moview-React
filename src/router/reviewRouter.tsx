import {Suspense} from "react";
import Loading from "../components/common/Loading.tsx";
import {ReviewDetail, ReviewEdit, ReviewFollow, ReviewMy, ReviewSearch, ReviewWrite} from "./pages.tsx";

const reviewRouter = () => {

    return [
        {
            path: 'write',
            element: <Suspense fallback={Loading}><ReviewWrite/></Suspense>
        },
        {
            path: 'edit/:id',
            element: <Suspense fallback={Loading}><ReviewEdit/></Suspense>
        },
        {
            path: 'search',
            element: <Suspense fallback={Loading}><ReviewSearch/></Suspense>
        },
        {
            path: ':id',
            element: <Suspense fallback={Loading}><ReviewDetail/></Suspense>
        },
        {
            path: 'my',
            element: <Suspense fallback={Loading}><ReviewMy/></Suspense>
        },
        {
            path: 'follow',
            element: <Suspense fallback={Loading}><ReviewFollow/></Suspense>
        },
    ]
}

export default reviewRouter;