import {ReviewTag} from "../../common/types/reviewType.tsx";
import {Link} from "react-router-dom";

function TagComponent({reviewTag}: {reviewTag: ReviewTag}) {
    return (
        <Link to={`/review/search?param=${reviewTag.tag}&option=tag`}
                className="bg-gray-50 text-emerald-500 px-4 py-1 mx-2 my-2 rounded-3xl hover:opacity-70"
        >{reviewTag.tag}</Link>
    );
}

export default TagComponent;