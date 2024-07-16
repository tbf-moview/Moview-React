import {Review, ReviewTag} from "../../common/type.tsx";
import {dateToKorean, getReviewText} from "../../util/reviewParser.tsx";
import TagComponent from "./TagComponent.tsx";
import {FaHeart} from "react-icons/fa6";

function SearchReviewComponent(review: Review) {

    return (
        <div key={review.id} className="mx-4">
            <div className="my-4 font-semibold">
                {review.member.nickname}
            </div>
            <div className="text-2xl overflow-hidden break-words font-semibold hover:cursor-pointer" onClick={() => location.href = `/review/${review.id}`}>
                {review.title}
            </div>
            <div className="w-full h-6 mt-2 mb-4 line-clamp-1 overflow-hidden break-words text-gray-500">
                {getReviewText(review.content)}
            </div>
            <div className="flex flex-row flex-wrap items-center w-full my-2">
                {review.reviewTags.map((reviewTag: ReviewTag, index: number) => TagComponent({reviewTag, index}))}
            </div>
            <div className="flex flex-row flex-wrap items-center mt-4 text-sm text-gray-400 font-light">
                {dateToKorean(review.createDate)}
                <div className="mx-2">·</div>
                <FaHeart className="mr-1.5"/>
                {review.like}
            </div>
            <hr className="my-12"/>
        </div>
    );
}

export default SearchReviewComponent;