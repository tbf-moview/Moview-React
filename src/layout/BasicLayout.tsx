import {ReactNode} from 'react';
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

function BasicLayout({children}: { children: ReactNode }) {
    return (
        <main className="h-screen">
            <Header/>
            {children}
            <Footer/>
        </main>
    );
}

export default BasicLayout;