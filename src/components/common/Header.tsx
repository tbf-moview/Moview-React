import LoginModal from "../LoginModal.tsx";
import {IoIosSearch} from "react-icons/io";
import {useState} from "react";
import {MdArrowDropDown} from "react-icons/md";
import {Link} from "react-router-dom";

function Header() {

    const [showDropdown, setShowDropdown] = useState<boolean>(false);

    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <header
            className="flex flex-row justify-between max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 py-3">
            <Link to={'/'} className="w-20 content-center">
                <img src={"/moview_logo.png"} alt="logo"/>
            </Link>
            <div className="flex flex-row items-center">

                <Link to={'/review/search'} className="ml-1 w-10 h-10 content-center hover:bg-gray-200 rounded-full">
                    <IoIosSearch className="text-2xl m-auto"/>
                </Link>

                <Link to={'/review/write'}
                      className="w-24 h-8 mx-2 content-center text-center border border-black rounded-3xl font-medium ease-in hover:bg-black hover:text-white transition-colors">
                    새 글 작성
                </Link>

                <div className="ml-2 w-18 h-10 flex items-center justify-center">

                    {/*<button*/}
                    {/*    className="bg-gray-900 text-white px-4 py-1 rounded-2xl hover:bg-gray-700 transition-colors"*/}
                    {/*    onClick={() => setShowModal(true)}*/}
                    {/*>*/}
                    {/*    로그아웃*/}
                    {/*</button>*/}
                    <button
                        className="bg-gray-900 text-white px-4 py-1 rounded-2xl hover:bg-gray-700 transition-colors"
                        onClick={() => setShowModal(true)}
                    >
                        로그인
                    </button>
                </div>

                <div className="relative pl-1"
                     onClick={() => setShowDropdown(!showDropdown)}>
                    <a><MdArrowDropDown className="text-2xl text-gray-500"/></a>
                    {showDropdown &&
                        <ul className="absolute z-10 h-auto top-12 right-0 bg-white w-48 shadow">
                            <li className="px-4 py-3 text-xl text-gray-700 hover:bg-gray-50 hover:text-emerald-500">
                                <Link to={'/review/my'} className="block text-base cursor-pointer">내 리뷰</Link>
                            </li>
                            <li className="px-4 py-3 text-xl text-gray-700 hover:bg-gray-50 hover:text-emerald-500">
                                <Link to={'/review/follow'} className="block text-base cursor-pointer">팔로우 목록</Link>
                            </li>
                            <li className="px-4 py-3 text-xl text-gray-700 hover:bg-gray-50 hover:text-emerald-500">
                                <Link to={'/setting'} className="block text-base cursor-pointer">설정</Link>
                            </li>
                        </ul>}
                </div>
            </div>

            {showModal && (<LoginModal
                showModal={showModal}
                setShowModal={setShowModal}/>)}

        </header>
    );
}

export default Header;