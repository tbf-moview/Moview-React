import {ReactNode, useEffect} from 'react';
import Header from "../components/common/Header.tsx";
import {checkToken} from "../api/loginApi.tsx";

function BasicLayout({bgColor, children}: { bgColor: string, children: ReactNode }) {

    useEffect(() => {
        checkToken().then((res) => console.log(res))
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