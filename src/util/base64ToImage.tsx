async function dataUrlToFile(dataUrl: string, fileName: string): Promise<File> {
    const res: Response = await fetch(dataUrl);
    const blob: Blob = await res.blob();
    return new File([blob], fileName, {type: 'image/png'});
}

export default function stringToImageArray(content: string) {
    const imageArray = new Array<File>()
    const contentArray = new Array<string>()

    const parts = content.split(/(<img[^>]*>)/);

    for (let i = 0; i < parts.length; i++) {
        if (parts[i].startsWith("<img")) {
            const srcMatch = content.match(/src="([^"]*)"/);
            if (srcMatch && srcMatch[1]) {
                const srcValue = srcMatch[1];
                const dataImageMatch = srcValue.match(/data:image\/(.*?);/);
                if (dataImageMatch && dataImageMatch[1]) {
                    dataUrlToFile(srcValue, i + "." + dataImageMatch[1]).then((res) => {
                        imageArray.push(res);
                    })
                }
            }
        } else {
            contentArray.push(content);
        }
    }

    return {imageArray, contentArray};
}