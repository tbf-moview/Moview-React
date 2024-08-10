import axios from "axios";
import {Review, ReviewIndex, ReviewRequest} from "../common/types/reviewType.tsx";
import {getReviewFormData} from "../util/reviewParser.tsx";
import API from "../styles/config.tsx";

export const getIndexReview = async (sortOption: string, page: number) => {
    const res = await axios.get<ReviewIndex[]>(
        `${API.BASE_URL}/reviews?sortOption=${sortOption}&page=${page}`,
    );
    return res.data;
}

export const getReview = async (id: string) => {
    const res = await axios.get<Review>(
        `${API.BASE_URL}/review/${id}`,
    );
    return res.data;
}

export const getSearchReview = async (searchWord: string, searchOption: string, sortOption: string, page: number) => {
    const res = await axios.get<ReviewIndex[]>(
        `${API.BASE_URL}/reviews/search?searchOption=${searchOption}&searchWord=${searchWord}&sortOption=${sortOption}&page=${page}`,
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