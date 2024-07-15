import {ReactNode} from 'react';
import Header from "../components/common/Header.tsx";

function BasicLayout({bgColor, children}: { bgColor: string, children: ReactNode }) {
    return (
        <main className={"w-screen h-full " + bgColor}>
            <div className="max-w-screen-lg 2xl:max-w-screen-xl mx-auto">
                <Header/>
                {children}
            </div>
        </main>
    );
}

export default BasicLayout;