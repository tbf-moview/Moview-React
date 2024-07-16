export interface Tab {
    id: number;
    label: Element;
    content: string;
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
    like: number;
    reviewTags: ReviewTag[];
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