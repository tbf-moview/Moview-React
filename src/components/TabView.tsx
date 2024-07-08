import {useState} from 'react';
import * as React from 'react';
import {LuClock4} from "react-icons/lu";
import TabBar from "./TabBar.tsx";
import {PiTrendUpFill} from "react-icons/pi";

const tabs = [
    {id: 1, label: <TabBar><PiTrendUpFill className="mr-2"/>트랜딩</TabBar>, content: 'Trend Review'},
    {id: 2, label: <TabBar><LuClock4 className="mr-2"/>최신</TabBar>, content: 'Recent Review'},
];

const TabView: React.FC = () => {
    const [activeTab, setActiveTab] = useState<number>(tabs[0].id);
    const [content, setContent] = useState(null);


    const handleTabClick = (id: number) => {

        setActiveTab(id);
    };

    const btnClassNameActive = "transition-all duration-200 mx-4";
    const btnClassName = "transition-all duration-200 mx-4 text-gray-400";

    return (
        <div>
            <div>
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={tab.id === activeTab
                            ? 'active' + btnClassNameActive :
                            btnClassName}
                        onClick={() => handleTabClick(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
                <div className="w-20 start-16 border-black border-b-2"></div>
            </div>
            <div className="tab-content">
                {tabs.map((tab) =>
                    tab.id === activeTab ? <div key={tab.id}>{tab.content}</div> : null
                )}
            </div>
        </div>
    );
};

export default TabView;