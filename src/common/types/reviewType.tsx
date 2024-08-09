
export interface ReviewRequest {
    title: string;
    tags: string[];
    texts: string[];
    images: File[];
}

export interface Review {
    id: string;
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
    id: string;
    title: string;
    content: string;
    email: string;
    nickname: string;
    likeCount: number;
    createDate: Date;
    updateDate: Date;
}

export interface ReviewTag {
    id: number;
    tag: string;
}

interface Member {
    email: string;
    nickname: string;
}