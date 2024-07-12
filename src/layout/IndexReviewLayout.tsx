import {Review} from "../common/type.tsx";
import {FaHeart} from "react-icons/fa6";

function IndexReviewLayout({reviewData}: { reviewData: Review[] }) {

    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12 mx-1.5">
            {reviewData.map((review: Review) =>
                <div key={review.id}
                     className="h-96 w-full lg:w-72 mx-auto bg-white px-3 shadow-md hover:shadow-lg transition-shadow rounded">
                    <div className="h-80 mb-2">
                        <img className="h-52 object-cover mx-auto"
                             src="https://www.shutterstock.com/image-photo/ginger-cat-paw-on-table-600nw-2401009167.jpg"
                             alt="review_image"/>
                        <div className="h-8 text-black w-full truncate">{review.title}</div>
                        <div className="h-16 text-sm text-gray-600 line-clamp-3">{review.content}</div>
                    </div>
                    <div className="h-6 text-gray-400 text-xs">
                        {review.createdAt.toDateString()}
                    </div>
                    <hr/>
                    <div className="h-8 flex flex-row justify-between items-center">
                        <div className="text-sm">
                            <span className="text-gray-400 mr-1.5">by</span>
                            {review.nickname}</div>
                        <div className="flex flex-row justify-between items-center text-sm"><FaHeart/>{review.like}</div>
                    </div>
                </div>)}
        </div>
    );
}

export default IndexReviewLayout;