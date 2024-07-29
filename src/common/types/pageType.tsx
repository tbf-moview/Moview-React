import {MutableRefObject, ReactElement} from "react";
import {ReviewIndex} from "./reviewType.tsx";

export interface Tab {
    id: number;
    label: ReactElement;
    content: ReviewIndex[];
}

export interface InfiniteScrollProps {
    root?: Element | null;
    rootMargin?: string;
    target: MutableRefObject<HTMLDivElement | null>;
    threshold?: number;
    targetArray: Array<ReviewIndex>;
    endPoint?: number;
}