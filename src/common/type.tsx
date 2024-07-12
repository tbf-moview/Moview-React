export interface Tab {
    id: number;
    label: Element;
    content: string;
}

export interface ReviewRequest {
    title: string;
    tag: string[];
    contentBlob: string[];
    imageBlob: File[];
}

export interface Review {
    id: number;
    title: string;
    content: string;
    tag: string[];
    nickname: string;
    like: number;
    createdAt: Date;
    modifiedAt: Date;
}