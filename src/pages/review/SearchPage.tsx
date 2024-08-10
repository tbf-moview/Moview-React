import BasicLayout from "../../layout/BasicLayout.tsx";
import {IoIosSearch, IoMdOptions} from "react-icons/io";
import {useCallback, useEffect, useRef, useState} from "react";
import {ReviewIndex} from "../../common/types/reviewType.tsx";
import SearchReviewComponent from "../../components/review/SearchReviewComponent.tsx";
import {useSearchParams} from "react-router-dom";
import {getSearchReview} from "../../api/reviewApi.tsx";
import {debounce} from "lodash";
import useInfiniteScroll from "../../util/useInfiniteScroll.tsx";

function SearchPage() {

    const [reviewData, setReviewData] = useState<ReviewIndex[]>([]);
    const [searchFocus, setSearchFocus] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams({"param": "", "option": "title", "sort": "like"})

    const [searchWord, setSearchWord] = useState<string>(searchParams.get("param") || "")
    const [searchOption, setSearchOption] = useState<string>(searchParams.get("option") || "title")
    const [searchSort, setSearchSort] = useState<string>(searchParams.get("sort") || "like")

    const [showDropdown, setShowDropdown] = useState<boolean>(false);

    const target = useRef<HTMLDivElement>(null)
    const {page} = useInfiniteScroll({
        target: target,
        targetArray: reviewData,
        threshold: 0.5,
        endPoint: 10,
    })

    useEffect(() => {
        console.log(page)
        delayedSearch(page, reviewData)
    }, [page]);

    useEffect(() => {
        delayedSearch(1, reviewData)
    }, [searchWord, searchOption, searchSort]);


    const delayedSearch = useCallback(
        debounce(async (pageNum: number, reviews: ReviewIndex[]) => {

                getSearchReview(
                    searchWord,
                    searchOption,
                    searchSort,
                    pageNum)
                    .then((data) => {
                        console.log(data)
                        console.log(pageNum)
                        console.log("reviews : " + reviews.length)
                        if (pageNum === 1) {
                            setReviewData([...data])
                        } else {
                            setReviewData([...reviews, ...data])
                        }
                    })
            }
            , 500)
        , [searchWord, searchOption, searchSort]
    )

    const handleSearchParam = (paramStr: string) => {
        setSearchWord(paramStr)

        setSearchParams({
            "param": paramStr,
            "option": searchParams.get("option") || "title",
            "sort": searchParams.get("sort") || "like",
        });
    }

    const handleSearchOption = (option: string) => {
        setSearchOption(option)

        setSearchParams({
            "param": searchParams.get("param") || "",
            "option": option,
            "sort": searchParams.get("sort") || "like",
        });
    }

    const handleSearchSort = (sort: string) => {
        setSearchSort(sort)

        setSearchParams({
            "param": searchParams.get("param") || "",
            "option": searchParams.get("option") || "title",
            "sort": sort,
        });
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
                           onChange={(event) => {
                               handleSearchParam(event.target.value)
                           }}
                           onFocus={() => setSearchFocus(true)}
                           onBlur={() => setSearchFocus(false)}/>


                    <div className="relative pl-1"
                         onClick={() => setShowDropdown(!showDropdown)}>
                        <IoMdOptions className="mr-4 text-gray-400 hover:text-gray-700 hover:cursor-pointer"/>
                        {showDropdown &&
                            <ul className="absolute z-10 h-auto top-12 right-0 bg-white w-48 shadow">
                                <li className="px-4 py-3 text-lg text-black border-b">
                                    검색 옵션
                                </li>
                                <li className={((searchOption === 'title') ? "font-normal " : " ") + "px-4 py-3 text-base text-gray-900 hover:bg-gray-50 hover:cursor-pointer"}
                                    onClick={() => handleSearchOption("title")}>
                                    제목
                                </li>
                                <li className={((searchOption === 'nickname') ? "font-normal " : " ") + "px-4 py-3 text-base text-gray-900 hover:bg-gray-50 hover:cursor-pointer"}
                                    onClick={() => handleSearchOption("nickname")}>
                                    닉네임
                                </li>
                                <li className={((searchOption === 'content') ? "font-normal " : " ") + "px-4 py-3 text-base text-gray-900 hover:bg-gray-50 hover:cursor-pointer"}
                                    onClick={() => handleSearchOption("content")}>
                                    내용
                                </li>
                                <li className={((searchOption === 'tag') ? "font-normal " : " ") + "px-4 py-3 text-base text-gray-900 hover:bg-gray-50 hover:cursor-pointer"}
                                    onClick={() => handleSearchOption("tag")}>
                                    태그
                                </li>
                                <li className="px-4 py-3 text-lg text-black border-t border-t-gray-300 border-b">
                                    정렬 옵션
                                </li>
                                <li className={((searchSort === 'like') ? "font-normal " : " ") + "px-4 py-3 text-base text-gray-900 hover:bg-gray-50 hover:cursor-pointer"}
                                    onClick={() => handleSearchSort("like")}>
                                    좋아요 순
                                </li>
                                <li className={((searchSort === 'create') ? "font-normal " : " ") + "px-4 py-3 text-base text-gray-900 hover:bg-gray-50 hover:cursor-pointer"}
                                    onClick={() => handleSearchSort("create")}>
                                    최신 순
                                </li>
                            </ul>}
                    </div>
                </div>
                <div className="h-4"/>

                <div ref={target}>
                    {reviewData.map((review: ReviewIndex) => SearchReviewComponent(review))}
                </div>

            </div>

        </BasicLayout>
    );
}

export default SearchPage;