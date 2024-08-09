function ReviewWriteTitle({ title, setTitle}: {title: string, setTitle: React.Dispatch<React.SetStateAction<string>>}): JSX.Element {
    return (
        <>
            <input className="text-5xl mt-10 mb-6 focus:outline-none"
                 type="text" placeholder="제목을 입력하세요" value={title}
                 onChange={(event) => setTitle(event.target.value)}/>
            <div className="w-16 h-1.5 bg-gray-600"/>
        </>
    );
}

export default ReviewWriteTitle;