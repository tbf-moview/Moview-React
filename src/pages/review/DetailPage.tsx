import BasicLayout from "../../layout/BasicLayout.tsx";
import DOMPurify from "dompurify";
import {useLocation} from "react-router-dom";
import {dateToKorean} from "../../util/reviewParser.tsx";
import TagComponent from "../../components/review/TagComponent.tsx";

function DetailPage() {

    const routerLocation = useLocation()
    const review = routerLocation.state;

    const safeContent = DOMPurify.sanitize(review.content)

    return (
        <BasicLayout bgColor={"bg-white"}>
            <div className="max-w-screen-md mx-auto">
                <div
                    className="mt-24 text-gray-800 text-5xl w-full font-bold tracking-wide leading-snug inline-block break-words text-wrap">
                    {review.title}
                </div>
                <div className="my-12">
                    <div className="flex flex-row justify-between items-center w-full">
                        <div className="flex flex-row">
                            <div className="font-semibold text-gray-800">
                                {review.nickname}
                            </div>
                            <div className="mx-2 text-gray-500">·</div>
                            <div className="text-gray-500">
                                {dateToKorean(review.createdAt)}
                            </div>
                        </div>
                        <button className="border border-emerald-500 text-emerald-500 px-[26px] py-[3px] rounded-2xl">
                            팔로우
                        </button>
                    </div>
                    <div className="flex flex-row flex-wrap items-center w-full mt-2">
                        {review.tag.map((tag: string, index: number) => (
                            TagComponent({tag, index})
                        ))}
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{__html: safeContent}}/>
                <div className="mt-12 mb-6 flex flex-row justify-between items-center w-full">
                    <div className="flex flex-row">
                        <div className="text-gray-400 mr-2">by</div>
                        <div className="font-semibold">{review.nickname}</div>
                    </div>
                    <button className="border border-emerald-500 text-emerald-500 px-[26px] py-[3px] rounded-2xl">
                        팔로우
                    </button>
                </div>
                <hr className="mb-12"/>
            </div>
        </BasicLayout>
    );
}

export default DetailPage;