import {useState} from 'react';
import {PiTrendUpFill} from "react-icons/pi";
import {LuClock4} from "react-icons/lu";
import IndexReviewLayout from "../../layout/IndexReviewLayout.tsx";
import {Review} from "../../common/type.tsx";

function IndexTab() {
    const reviewData: Review[] = [
        {
            id: 1,
            title: "test title111111111111111111111111111111111111111111111111111111111111111111",
            content: "<p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p>",
            tag: ["tag1", "tag2", "tag3"],
            nickname: "username",
            like: 10,
            createdAt: new Date("2024-07-11"),
            modifiedAt: new Date("2024-07-11"),
        },
        {
            id: 2,
            title: "test title",
            content: "<p>content</p>",
            tag: ["tag1", "tag2", "tag3"],
            nickname: "username",
            like: 10,
            createdAt: new Date("2024-07-11"),
            modifiedAt: new Date("2024-07-11"),
        },
        {
            id: 3,
            title: "test title",
            content: "<p>content</p>",
            tag: ["tag1", "tag2", "tag3"],
            nickname: "username",
            like: 10,
            createdAt: new Date("2024-07-11"),
            modifiedAt: new Date("2024-07-11"),
        },
        {
            id: 4,
            title: "test title",
            content: "<p>content</p>",
            tag: ["tag1", "tag2", "tag3"],
            nickname: "username",
            like: 10,
            createdAt: new Date("2024-07-11"),
            modifiedAt: new Date("2024-07-11"),
        },
    ]

    const [activeTabIndex, setActiveTabIndex] = useState<number>(1);

    const tabs = [
        {id: 1, label: <><PiTrendUpFill className="mr-2"/>트랜딩</>, content: reviewData},
        {id: 2, label: <><LuClock4 className="mr-2"/>최신</>, content: []},
    ];

    return (
        <div className="relative max-w-screen-xl mx-auto">
            <div className="flex flex-row">
                {
                    tabs.map((tab) =>
                        <button className="flex flex-row justify-between items-center text-lg font-extrabold mt-6 ml-6"
                                key={tab.id}
                                onClick={() => setActiveTabIndex(tab.id)}>
                            {tab.label}
                        </button>)
                }
            </div>
            <div
                className={((activeTabIndex === 1) ? "left-5 " : "left-28 ") + "absolute mt-1.5 w-20 h-0.5 border-black bg-black transition-all"}></div>
            {
                tabs.map((tab) =>
                    (tab.id === activeTabIndex)
                        ? <IndexReviewLayout reviewData={tab.content} key={tab.id}/>
                        : null)
            }
        </div>
    );
}

export default IndexTab;