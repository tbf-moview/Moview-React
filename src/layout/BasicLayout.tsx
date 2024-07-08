import {ReactNode} from 'react';
import Header from "../components/Header.tsx";

function BasicLayout({children}: { children: ReactNode }) {
    return (
        <main className="bg-gray-100 w-screen h-screen">
            <div className="max-w-7xl mx-auto">
                <Header/>
                {children}
            </div>
        </main>
    );
}

export default BasicLayout;