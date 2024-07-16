import LoginModal from "../LoginModal.tsx";
import {IoIosSearch} from "react-icons/io";
import {useState} from "react";
import {useSelector} from "react-redux";
import {IRootState} from "../../store.tsx";

function Header() {

    const loginState = useSelector((state: IRootState) => state.loginSlice)

    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <header className="flex flex-row justify-between max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 py-3">
            <button className="text-xl" onClick={() => location.href = '/'}>
                Moview
            </button>
            <div className="flex flex-row justify-between items-center">
                <button className="ml-1 w-10 h-10 content-center hover:bg-gray-200 rounded-full"
                        onClick={() => location.href = '/review/search'}>
                    <IoIosSearch className="text-2xl m-auto"/>
                </button>
                <button className="w-24 h-8 mx-2 content-center border border-black rounded-3xl font-medium ease-in hover:bg-black hover:text-white transition-colors"
                        onClick={() => location.href = '/review/write'}>
                    새 글 작성
                </button>
                <div className="ml-2 w-18 h-10 flex items-center justify-center">
                    <button
                        className="bg-gray-900 text-white px-4 py-1 rounded-2xl hover:bg-gray-700 transition-colors"
                        onClick={() => setShowModal(true)}
                    >
                        로그인
                    </button>
                </div>
            </div>

            {showModal && (<LoginModal
                showModal={showModal}
                setShowModal={setShowModal}/>)}

        </header>
    );
}

export default Header;