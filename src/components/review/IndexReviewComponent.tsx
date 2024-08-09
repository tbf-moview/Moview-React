import {ReviewIndex} from "../../common/types/reviewType.tsx";
import {dateToKorean, getFirstReviewImage, getReviewText} from "../../util/reviewParser.tsx";
import {FaHeart} from "react-icons/fa6";
import {NavigateFunction} from "react-router-dom";

function IndexReviewComponent(review: ReviewIndex, moveToPath: NavigateFunction) {

    return (
        <a key={review.id}
           className="h-96 w-full lg:w-[304px] mx-auto bg-white px-3 shadow-md hover:-translate-y-2 hover:shadow-lg ease-in duration-200 transition rounded"
           onClick={() => {moveToPath(`/review/${review.id}`)}}>
            <div className="h-[304px] mb-2">
                {(getFirstReviewImage(review.content)) &&
                    <img className="h-52 object-cover mx-auto"
                         src={getFirstReviewImage(review.content)}
                         alt="review_image"/>}
                <div className=" mt-2 h-8 text-gray-800 font-semibold w-full truncate">{review.title}</div>
                <div
                    className="h-16 text-sm text-gray-600 font-light w-full inline-block break-words text-wrap line-clamp-3">
                    {getReviewText(review.content)}
                </div>
            </div>
            <div className="h-6 text-gray-400 font-normal text-xs">
                {dateToKorean(review.createDate)}
            </div>
            <hr/>
            <div className="h-12 flex flex-row justify-between items-center">
                <div className="text-xs font-semibold text-gray-800">
                    <span className="text-gray-400 font-light mr-1.5">by</span>
                    {review.nickname}</div>
                <div className="flex flex-row justify-between items-center text-xs font-light">
                    <FaHeart className="mr-2"/>{review.likeCount}
                </div>
            </div>
        </a>
    );
}

export default IndexReviewComponent;