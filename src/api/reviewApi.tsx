import axios from "axios";
import API from "../styles/config.tsx";
import {Review, ReviewIndex, ReviewRequest} from "../common/type.tsx";

export const getIndexReview = async (page: number) => {
    const res = await axios.get<ReviewIndex[]>(
        `${API.BASE_URL}/reviews/${page}`,
    );
    return res.data;
}

export const getReview = async (id: number) => {
    const res = await axios.get<Review>(
        `${API.BASE_URL}/review/${id}`,
    );
    return res.data;
}

export const postReview = async (reviewRequest: ReviewRequest) => {
    const formData = new FormData();
    formData.append("title", reviewRequest.title);
    reviewRequest.tags.forEach((tag) => formData.append("tags", tag));
    reviewRequest.texts.forEach((text) => formData.append("texts", text));
    reviewRequest.images.forEach((image) => formData.append("images", image));

    return await axios.post(
        `${API.BASE_URL}/review`,
        formData,
    );
}