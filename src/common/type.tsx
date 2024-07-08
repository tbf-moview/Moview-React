export interface Tab {
    id: number;
    label: Element;
    content: string;
}

export interface Review {
    title: string;
    content: string;
    nickname: string;
    like: number;
    createdAt: Date;
    modifiedAt: Date;
}