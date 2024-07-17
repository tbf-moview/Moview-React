import BasicLayout from "../../layout/BasicLayout.tsx";
import {IoIosSearch} from "react-icons/io";
import {useState} from "react";
import {Review} from "../../common/type.tsx";
import SearchReviewComponent from "../../components/review/SearchReviewComponent.tsx";
import {reviewData} from "../../common/testData.tsx";
import {useSearchParams} from "react-router-dom";

function SearchPage() {

    const [searchParams, setSearchParams] = useSearchParams()
    const [searchFocus, setSearchFocus] = useState(false);

    const handleSearchParam = (paramStr: string) => {
        setSearchParams({"param" : paramStr});
    }


    return (
        <BasicLayout bgColor="bg-white">
            <div className="mx-auto max-w-screen-md">
                <div
                    className={"border w-auto md:w-auto flex flex-row items-center md:mt-8 md:mx-4 m-4 md:h-16 h-9 p-2 text-lg text-gray-700 font-light md:text-2xl ease-in duration-200 transition-all " +
                        (searchFocus ? "border-gray-700" : "border-gray-400")}>
                    <IoIosSearch className="m-3 md:text-3xl text-2xl"/>
                    <input placeholder="검색어를 입력하세요"
                           className="focus:outline-none w-full"
                           value={searchParams.get("param") || ''}
                           onChange={(event) => handleSearchParam(event.target.value)}
                           onFocus={() => setSearchFocus(true)}
                           onBlur={() => setSearchFocus(false)}/>
                </div>
                {searchParams.get("param") && <div>
                    {reviewData.map((review: Review) => SearchReviewComponent(review))}
                </div>}

            </div>
        </BasicLayout>
    );
}

export default SearchPage;