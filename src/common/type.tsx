import {MutableRefObject, ReactElement} from "react";

export interface Tab {
    id: number;
    label: ReactElement;
    content: ReviewIndex[];
}

export interface ReviewRequest {
    title: string;
    tags: string[];
    texts: string[];
    images: File[];
}

export interface Review {
    id: number;
    title: string;
    content: string;
    member: Member;
    likeCount: number;
    likeSign: boolean;
    reviewTags: ReviewTag[];
    createDate: Date;
    updateDate: Date;
}

export interface ReviewIndex {
    id: number;
    title: string;
    content: string;
    email: string;
    nickname: string;
    likeCount: number;
    createDate: Date;
    updateDate: Date;
}

interface Member {
    email: string;
    nickname: string;
}

export interface ReviewTag {
    id: number;
    tag: string;
}

export interface InfiniteScrollProps {
    root?: Element | null;
    rootMargin?: string;
    target: MutableRefObject<HTMLDivElement | null>;
    threshold?: number;
    targetArray: Array<ReviewIndex>;
    endPoint?: number;
}