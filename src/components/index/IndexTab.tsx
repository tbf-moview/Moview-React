import {Fragment, useState} from 'react';
import {PiTrendUpFill} from "react-icons/pi";
import {LuClock4} from "react-icons/lu";
import IndexReviewLayout from "../../layout/IndexReviewLayout.tsx";
import {reviewData} from "../../common/testData.tsx";
import {Review} from "../../common/type.tsx";
import IndexReviewComponent from "../review/IndexReviewComponent.tsx";

function IndexTab() {

    const [activeTabIndex, setActiveTabIndex] = useState<number>(1);

    const tabs = [
        {id: 1, label: <><PiTrendUpFill className="mr-2"/>트렌딩</>, content: reviewData},
        {id: 2, label: <><LuClock4 className="mr-2"/>최신</>, content: []},
    ];

    return (
        <div className="relative max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
            <div className="flex flex-row">
                {
                    tabs.map((tab) =>
                        <button className={"flex flex-row justify-between items-center text-lg mt-6 ml-6" +
                            (tab.id === activeTabIndex ? " font-semibold text-gray-800" : " font-normal text-gray-400")}
                                key={tab.id}
                                onClick={() => setActiveTabIndex(tab.id)}>
                            {tab.label}
                        </button>)
                }
            </div>
            <div
                className={((activeTabIndex === 1) ? "left-5 " : "left-28 ") + "absolute mt-1.5 w-20 h-0.5 border-black bg-black transition-all"}></div>

            <IndexReviewLayout>
                {
                    tabs.map((tab) =>
                        <Fragment key={tab.id}>
                            {tab.content.map((review: Review) => IndexReviewComponent(review))}
                        </Fragment>)
                }
            </IndexReviewLayout>
        </div>
    );
}

export default IndexTab;