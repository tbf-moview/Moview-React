import {ReactNode} from 'react';
import Header from "../components/common/Header.tsx";

function BasicLayout({bgColor, children}: { bgColor: string, children: ReactNode }) {
    return (
        <main className={"w-screen h-screen " + bgColor}>
            <div className="max-w-7xl mx-auto">
                <Header/>
                {children}
            </div>
        </main>
    );
}

export default BasicLayout;