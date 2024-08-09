import {useEffect, useRef, useState} from 'react';
import {PiTrendUpFill} from "react-icons/pi";
import {ReviewIndex} from "../../common/types/reviewType.tsx";
import IndexReviewComponent from "../review/IndexReviewComponent.tsx";
import {getIndexReview} from "../../api/reviewApi.tsx";
import useInfiniteScroll from "../../util/useInfiniteScroll.tsx";
import Loading from "../common/Loading.tsx";
import {Tab} from "../../common/types/pageType.tsx";
import {useNavigate} from "react-router-dom";
import {LuClock4} from "react-icons/lu";

function IndexTab() {

    const navigate = useNavigate();

    const [activeTabIndex, setActiveTabIndex] = useState<number>(1);

    const [reviewData, setReviewData] = useState<ReviewIndex[]>([]);

    const target = useRef<HTMLDivElement>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    let {page} = useInfiniteScroll({
        target: target,
        targetArray: reviewData,
        threshold: 0.2,
        endPoint: 2,
    })

    useEffect(() => {
        setIsLoading(true);
        const sortOption = (activeTabIndex === 1) ? "like" : "create";

        getIndexReview(page, sortOption).then((data) => {
            setReviewData([...reviewData, ...data]);
            setIsLoading(false)
        })
    }, [page]);

    const tabs: Tab[] = [
        {id: 1, label: <><PiTrendUpFill className="mr-2"/>트렌딩</>, content: reviewData},
        {id: 2, label: <><LuClock4 className="mr-2"/>최신</>, content: reviewData},
    ];

    const handleTabClick = (id: number) => {
        page = 1;
        const sortOption = (id === 1) ? "like" : "create";
        setActiveTabIndex(id);

        getIndexReview(page, sortOption).then((data) => {
            setReviewData([...data])
            setIsLoading(false)
        });
    }

    return (
        <>
            <div className="relative max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
                <div className="flex flex-row">
                    {
                        tabs.map((tab) =>
                            <button className={"flex flex-row justify-between items-center text-lg mt-6 ml-6" +
                                (tab.id === activeTabIndex ? " font-semibold text-gray-800" : " font-normal text-gray-400")}
                                    key={tab.id}
                                    onClick={() => handleTabClick(tab.id)}>
                                {tab.label}
                            </button>)
                    }
                </div>
                <div
                    className={((activeTabIndex === 1) ? "left-5 " : "left-28 ") + "absolute mt-1.5 w-20 h-0.5 border-black bg-black transition-all"}></div>

                <div ref={target}
                     className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-12 mx-1.5">
                    {reviewData.map((review: ReviewIndex) => IndexReviewComponent(review, navigate))}
                </div>
                {isLoading && <div>{Loading}</div>}
            </div>
        </>
    );
}

export default IndexTab;