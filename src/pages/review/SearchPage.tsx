import BasicLayout from "../../layout/BasicLayout.tsx";
import {IoIosSearch} from "react-icons/io";
import {useCallback, useEffect, useRef, useState} from "react";
import {Review} from "../../common/types/reviewType.tsx";
import SearchReviewComponent from "../../components/review/SearchReviewComponent.tsx";
import {useSearchParams} from "react-router-dom";
import {getSearchReview} from "../../api/reviewApi.tsx";
import useInfiniteScroll from "../../util/useInfiniteScroll.tsx";
import Loading from "../../components/common/Loading.tsx";
import {debounce} from "lodash";

function SearchPage() {

    const [reviewData, setReviewData] = useState<Review[]>([]);
    const [searchParams, setSearchParams] = useSearchParams({"param": ""})
    const [searchFocus, setSearchFocus] = useState(false);

    const target = useRef<HTMLDivElement>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    let {page} = useInfiniteScroll({
        target: target,
        targetArray: reviewData,
        threshold: 0.2,
        endPoint: 2,
    })

    // useEffect(() => {
    //     setIsLoading(true);
    //
    //     getSearchReview(searchParams.toString(), "title", "like", page).then((data) => {
    //         setReviewData([...reviewData, ...data]);
    //     })
    //
    //     setIsLoading(false)
    // }, [page]);

    const sendQuery = (query: string) => {
        console.log("delay")
        getSearchReview(query, "title", "like", page)
            .then((data) => setReviewData([...reviewData, ...data]));
    }

    const delayedSearch = useCallback(
        debounce(async (query: string) =>
            sendQuery(query), 600), []
    )

    const handleSearchParam = (paramStr: string) => {
        setSearchParams({"param": paramStr});
        console.log(paramStr)

        delayedSearch(paramStr);
        console.log("delayedSearch")
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

                {isLoading && <div>{Loading}</div>}

            </div>
        </BasicLayout>
    );
}

export default SearchPage;