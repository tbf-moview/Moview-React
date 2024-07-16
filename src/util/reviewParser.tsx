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