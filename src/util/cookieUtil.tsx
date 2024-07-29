export const deleteCookie = (key: string) => {
    if (getCookie(key)) {
        document.cookie = key + "=" + ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
    }
}

export const getCookie = (key: string) => {
    return document.cookie.split(';').some(c => {
        return c.trim().startsWith(key + '=');
    });
}