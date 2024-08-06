import {ReactNode, useEffect} from 'react';
import Header from "../components/common/Header.tsx";
import {sendCookie} from "../api/loginApi.tsx";
import {useNavigate} from "react-router-dom";
import {useLoginStore} from "../store.tsx";

function BasicLayout({bgColor, children}: { bgColor: string, children: ReactNode }) {

    const { isLogin, setIsLogin } = useLoginStore();

    const navigate = useNavigate()

    useEffect(() => {
        sendCookie().then((res) => {
            if (res.data != 'Email verified successfully') {
                setIsLogin(false);
            }

            setIsLogin(false);
        }).catch(() => {
        })
    })

    return (
        <main className={"w-screen h-auto " + bgColor}>
            <div className="max-w-screen-lg 2xl:max-w-screen-xl mx-auto">
                <Header isLogin={isLogin}/>
                {children}
            </div>
        </main>
    );
}

export default BasicLayout;