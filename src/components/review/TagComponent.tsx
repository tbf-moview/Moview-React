function TagComponent({tag, index}: {tag: string, index: number}) {
    return (
        <button key={index}
                className="bg-gray-50 text-emerald-500 px-4 py-1 mx-2 my-2 rounded-3xl hover:opacity-70"
                onClick={() => location.href = `/review/search?param=${tag}`}
        >{tag}</button>
    );
}

export default TagComponent;