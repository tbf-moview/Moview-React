import LoginModal from "../LoginModal.tsx";
import {IoIosSearch} from "react-icons/io";
import {useState} from "react";
import {MdMovieEdit} from "react-icons/md";

function Header() {
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <header className="flex flex-row justify-between px-4 py-3">
            <button className="text-xl" onClick={() => location.href = '/'}>
                Moview
            </button>
            <div className="flex flex-row justify-between items-center">
                <button className="w-10 h-10 content-center"
                        onClick={() => location.href = '/review/write'}>
                    <MdMovieEdit className="text-2xl m-auto"/>
                </button>
                <button className="ml-1 w-10 h-10 content-center"
                        onClick={() => location.href = '/review/search'}>
                    <IoIosSearch className="text-2xl m-auto"/>
                </button>
                <div className="ml-2 w-18 h-10 flex items-center justify-center">
                    <button
                        className="bg-gray-900 text-white px-4 py-1 rounded-2xl"
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