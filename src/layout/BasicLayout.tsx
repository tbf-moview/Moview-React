import {ReactNode, useEffect} from 'react';
import Header from "../components/common/Header.tsx";
import {checkToken} from "../api/loginApi.tsx";
import {useDispatch} from "react-redux";
import {login, logout} from "../slices/loginSlice.tsx";

function BasicLayout({bgColor, children}: { bgColor: string, children: ReactNode }) {

    const dispatch = useDispatch();

    useEffect(() => {
        checkToken()
            .then((res) => {
                (res.data.email)
                    ? dispatch(login(res.data))
                    : dispatch(logout())
            })
            .catch(() => {

            });
    }, []);

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