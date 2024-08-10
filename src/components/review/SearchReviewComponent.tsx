import {ReviewIndex} from "../../common/types/reviewType.tsx";
import {dateToKorean, getReviewText} from "../../util/reviewParser.tsx";
import {FaHeart} from "react-icons/fa6";
import {Link} from "react-router-dom";

function SearchReviewComponent(review: ReviewIndex) {

    return (
        <div key={review.id} className="mx-4">
            <div className="my-4 font-semibold">
                {review.nickname}
            </div>
            <Link to={`/review/${review.id}`}
                  className="text-2xl overflow-hidden break-words font-semibold">
                {review.title}
            </Link>
            <Link to={`/review/${review.id}`}
                  className="w-full h-6 mt-2 mb-4 line-clamp-1 overflow-hidden break-words text-gray-500">
                {getReviewText(review.content)}
            </Link>
            <div className="flex flex-row flex-wrap items-center mt-4 text-sm text-gray-400 font-light">
                {dateToKorean(review.createDate)}
                <div className="mx-2">·</div>
                <FaHeart className="mr-1.5"/>
                {review.likeCount}
            </div>
            <hr className="my-12"/>
        </div>
    );
}

export default SearchReviewComponent;