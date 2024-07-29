import {ReactNode, useEffect} from 'react';
import Header from "../components/common/Header.tsx";
import {sendCookie} from "../api/loginApi.tsx";
import {useDispatch} from "react-redux";
import {login} from "../slices/loginSlice.tsx";

function BasicLayout({bgColor, children}: { bgColor: string, children: ReactNode }) {

    const dispatch = useDispatch();

    useEffect(() => {
        sendCookie().then(() => {
            dispatch(login(true))
        }).catch(() => {
        })
    })

    return (
        <main className={"w-screen h-auto " + bgColor}>
            <div className="max-w-screen-lg 2xl:max-w-screen-xl mx-auto">
                <Header/>
                {children}
            </div>
        </main>
    );
}

export default BasicLayout;