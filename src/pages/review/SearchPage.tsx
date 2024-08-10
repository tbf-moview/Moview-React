import BasicLayout from "../../layout/BasicLayout.tsx";
import {IoIosSearch} from "react-icons/io";
import {useCallback, useEffect, useState} from "react";
import {ReviewIndex} from "../../common/types/reviewType.tsx";
import SearchReviewComponent from "../../components/review/SearchReviewComponent.tsx";
import {useSearchParams} from "react-router-dom";
import {getSearchReview} from "../../api/reviewApi.tsx";
import {debounce} from "lodash";
import Loading from "../../components/common/Loading.tsx";

function SearchPage() {

    const [reviewData, setReviewData] = useState<ReviewIndex[]>([]);
    const [searchParams, setSearchParams] = useSearchParams({"param": ""})
    const [searchFocus, setSearchFocus] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        getSearchReview("", "title", "like", 1)
            .then((data) => {
                setReviewData([...reviewData, ...data]);
            })

        setIsLoading(false)
    }, []);

    const sendQuery = (query: string) => {
        getSearchReview(query, "title", "like", 1)
            .then((data) => {
                console.log(data);
                setReviewData([...reviewData, ...data])
            });
    }

    const delayedSearch = useCallback(
        debounce(async (query: string) =>
            sendQuery(query), 500), []
    )

    const handleSearchParam = (paramStr: string) => {
        setSearchParams({"param": paramStr});

        delayedSearch(paramStr);
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
                <div>
                    {reviewData.map((review: ReviewIndex) => SearchReviewComponent(review))}
                </div>

            </div>

            {isLoading && <div>{Loading}</div>}
        </BasicLayout>
    );
}

export default SearchPage;