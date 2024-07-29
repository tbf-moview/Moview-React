import BasicLayout from "../../layout/BasicLayout.tsx";
import DOMPurify from "dompurify";
import {dateToKorean} from "../../util/reviewParser.tsx";
import TagComponent from "../../components/review/TagComponent.tsx";
import {useEffect, useState} from "react";
import {Review, ReviewTag} from "../../common/type.tsx";
import {getReview, likeReview} from "../../api/reviewApi.tsx";
import {useParams} from "react-router-dom";
import {FaHeart} from "react-icons/fa6";

function DetailPage() {

    const {id} = useParams();
    const reviewId = id || "";

    const initState: Review = {
        id: reviewId,
        title: "",
        content: "",
        reviewTags: [],
        member: {
            email: "",
            nickname: ""
        },
        likeCount: 0,
        likeSign: false,
        createDate: new Date("2024-07-11"),
        updateDate: new Date("2024-07-11"),
    }

    const [review, setReview] = useState<Review>(initState);
    const [likeSign, setLikeSign] = useState<boolean>(false);
    const [likeCount, setLikeCount] = useState<number>(0);

    useEffect(() => {
        getReview(reviewId).then((data) => {
            data.reviewTags = data.reviewTags.sort((a, b) => a.tag.toLowerCase() < b.tag.toLowerCase() ? -1 : 1)
            setReview(data);
            setLikeSign(data.likeSign);
            setLikeCount(data.likeCount);
        })
    }, [reviewId])

    const handleLikeSign = () => {
        likeReview(reviewId).then((res) => {
            if (res.status === 200) {
                setLikeSign(!likeSign);
                setLikeCount((likeSign) ? likeCount - 1 : likeCount + 1);
            } else {
                alert("문제가 발생했습니다 다시 시도해 주세요")
            }
        })


    }

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
                                {review.member.nickname}
                            </div>
                            <div className="mx-2 text-gray-500">·</div>
                            <div className="text-gray-500">
                                {dateToKorean(review.createDate)}
                            </div>
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <button
                                className="border border-emerald-500 text-emerald-500 px-6 py-0.5 mr-2 rounded-2xl"
                                onClick={() => location.href = `/review/edit/${review.id}`}>
                                수정하기
                            </button>
                            <button
                                className="border border-emerald-500 text-emerald-500 px-6 py-0.5 mr-2 rounded-2xl">
                                팔로우
                            </button>
                            <button
                                className={"flex flex-row justify-between items-center border px-6 py-0.5 rounded-2xl " +
                                    ((likeSign) ? "bg-emerald-500 border-emerald-500 text-white" : "bg-white border-gray-400 text-gray-400")}
                                onClick={handleLikeSign}
                            >
                                <FaHeart className="mr-3"/>
                                {likeCount}
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap items-center w-full mt-2">
                        {review.reviewTags.map((reviewTag: ReviewTag) => (
                            <TagComponent key={reviewTag.id} reviewTag={reviewTag}/>
                        ))}
                    </div>
                </div>
                <div className="w-full inline-block break-words text-wrap"
                     dangerouslySetInnerHTML={{__html: safeContent}}/>
                <div className="mt-12 mb-6 flex flex-row justify-between items-center w-full">
                    <div className="flex flex-row">
                        <div className="text-gray-400 mr-2">by</div>
                        <div className="font-semibold">{review.member.nickname}</div>
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