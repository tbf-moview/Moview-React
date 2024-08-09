function ReviewWriteTag({tag, tagString, tagChange, showTag, setShowTag, removeTag}: {
    tag: string[],
    tagString: string,
    tagChange: (value: string) => void,
    showTag: boolean,
    setShowTag: (value: boolean) => void,
    removeTag: (value: string | null) => void,
}) {
    return (
        <div className="relative z-10">
            <div className="flex flex-row flex-wrap items-center">
                {tag.map((tag, i) =>
                    <button key={i}
                            className="bg-gray-50 text-emerald-500 px-4 py-1 mx-2 rounded-3xl"
                            onClick={(event) => removeTag(event.currentTarget.textContent)}>{tag}</button>)}
                <input className="text-lg font-normal my-5 focus:outline-none"
                       type="text" placeholder="태그를 입력하세요" value={tagString}
                       onChange={(event) => tagChange(event.target.value)}
                       onFocus={() => setShowTag(true)}
                       onBlur={() => setShowTag(false)}/>
            </div>
            {showTag && <div
                className="absolute -bottom-14 left-0 flex flex-col bg-neutral-700 text-white w-64 p-3 text-xs">
                <span className="pb-1">쉼표를 입력하여 태그를 등록할 수 있습니다.</span>
                <span>등록된 태그를 클릭하면 삭제됩니다.</span>
            </div>}
        </div>
    );
}

export default ReviewWriteTag;