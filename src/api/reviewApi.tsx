import axios from "axios";
import API from "../styles/config.tsx";
import {ReviewRequest} from "../common/type.tsx";

export const getIndexReview = async ({title, content}: { title: string, content: string }) => {
    const res = await axios.post(
        `${API.BASE_URL}/api/review/list`,
        {title: title, content: content}
    );
    return res.data;
}

export const getReview = async (id: number) => {
    const res = await axios.get(
        `${API.BASE_URL}/api/reviews/${id}`
    );
    return res.data;
}

export const postReview = async (reviewRequest: ReviewRequest) => {
    const res = await axios.post(
        `${API.BASE_URL}/api/review`,
        reviewRequest,
    );
    return res.data;
}