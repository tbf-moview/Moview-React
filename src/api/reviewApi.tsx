import axios from "axios";
import API from "../styles/config.tsx";
import {Review, ReviewIndex, ReviewRequest} from "../common/type.tsx";
import {getReviewFormData} from "../util/reviewParser.tsx";

export const getIndexReview = async (page: number) => {
    const res = await axios.get<ReviewIndex[]>(
        `${API.BASE_URL}/reviews/${page}`,
    );
    return res.data;
}

export const getReview = async (id: string) => {
    const res = await axios.get<Review>(
        `${API.BASE_URL}/review/${id}`,
    );
    return res.data;
}

export const postReview = async (reviewRequest: ReviewRequest) => {
    const formData = getReviewFormData(reviewRequest);
    return await axios.post(
        `${API.BASE_URL}/review`,
        formData,
    );
}

export const postEditReview = async (id: string, reviewRequest: ReviewRequest) => {
    const formData = getReviewFormData(reviewRequest);
    return await axios.put(
        `${API.BASE_URL}/review/${id}`,
        formData,
    );
}

export const likeReview = async (id: string) => {
    return await axios.put(
        `${API.BASE_URL}/review/${id}/like`
    );
}