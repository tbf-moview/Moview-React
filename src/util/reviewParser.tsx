export const dateToKorean = (date: Date) => {
    return date.getFullYear() + '년 ' + (date.getMonth() + 1) + '월 ' + date.getDate() + '일';
}

export const getReviewText = (content: string)=> {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    return doc.body.textContent || '';
}