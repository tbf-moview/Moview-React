import BasicLayout from "../../layout/BasicLayout.tsx";
import {IoIosSearch} from "react-icons/io";
import {useState} from "react";

function SearchPage() {
    const [searchFocus, setSearchFocus] = useState(false);

    return (
        <BasicLayout bgColor="bg-white">
            <div className="mx-auto max-w-screen-md">
                <div
                    className={"border w-auto md:w-auto flex flex-row items-center md:mt-8 md:mx-4 m-4 md:h-16 h-9 p-2 text-lg md:text-2xl transition-all " +
                        (searchFocus ? "border-gray-700" : "border-gray-400")}>
                    <IoIosSearch className="m-3 md:text-3xl text-2xl"/>
                    <input placeholder="검색어를 입력하세요"
                           className="focus:outline-none"
                           onFocus={() => setSearchFocus(true)}
                           onBlur={() => setSearchFocus(false)}/>
                </div>
                <div>

                </div>
            </div>
        </BasicLayout>
    );
}

export default SearchPage;