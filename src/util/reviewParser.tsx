import {ReviewRequest} from "../common/types/reviewType.tsx";

export const dateToKorean = (date: Date) => {
    const outputDate = new Date(date);
    return outputDate.getFullYear() + '년 '
        + (outputDate.getMonth() + 1) + '월 '
        + outputDate.getDate() + '일';
}

export const getReviewText = (content: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    return doc.body.textContent || '';
}

export const getFirstReviewImage = (content: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const imgTag = doc.querySelector('img');
    return imgTag ? imgTag.src : "";
}

export const getReviewFormData = (reviewRequest: ReviewRequest) => {
    const formData = new FormData();
    formData.append("title", reviewRequest.title);
    reviewRequest.tags.forEach((tag) => formData.append("tags", tag));
    reviewRequest.texts.forEach((text) => formData.append("texts", text));
    reviewRequest.images.forEach((image) => formData.append("images", image));

    return formData;
}