import {useState} from 'react';
import {Editor} from "@tinymce/tinymce-react";
import API from "../../styles/config.tsx";
import {postReview} from "../../api/reviewApi.tsx";
import {IoMdArrowBack} from "react-icons/io";
import {useNavigate} from "react-router-dom";
import stringToImageArray from "../../util/base64ToImage.tsx";
import {ReviewRequest} from "../../common/type.tsx";


function WritePage() {
    const [title, setTitle] = useState('');
    const [tag, setTag] = useState<string[]>([]);
    const [tagString, setTagString] = useState('');
    const [content, setContent] = useState('');

    const [showTag, setShowTag] = useState<boolean>(false);

    const navigate = useNavigate();

    const tagChange = (tagInputValue: string) => {
        if (tagInputValue.includes(",")) {
            const splitTag = tagInputValue.split(",")

            if (!tag.includes(splitTag[0])) {
                setTag([...tag, splitTag[0]])
            }
            setTagString(splitTag[1]);
        } else {
            setTagString(tagInputValue);
        }
    }

    const removeTag = (tagInputValue: string | null) => {
        if (tagInputValue != null) {
            setTag(tag.filter(t => t != tagInputValue));
        }
    }

    const handleSubmit = async () => {
        const {imageArray, contentArray} = await stringToImageArray(content)
        const reviewRequest: ReviewRequest = {
            title: title,
            tag: tag,
            contentBlob: contentArray,
            imageBlob: imageArray
        }
        console.log(reviewRequest);

        try {
            const response = await postReview(reviewRequest)
            console.log('서버 응답:', response.data)
        } catch (error) {
            alert('서버 요청 오류: ' + error)
        }
    };

    return (
        <>
            <div className="mx-12 h-screen">
                <input className="text-5xl mt-10 mb-6 focus:outline-none"
                       type="text" placeholder="제목을 입력하세요" value={title}
                       onChange={(event) => setTitle(event.target.value)}/>
                <div className="w-16 h-1.5 bg-gray-600"/>
                <div className="relative z-10">
                    <div className="flex flex-row items-center">
                        {tag.map((tag, i) =>
                            <button key={i}
                                 className="bg-gray-50 text-emerald-500 px-4 py-1 mx-2 rounded-3xl"
                                 onClick={(event) => removeTag(event.currentTarget.textContent)}>{tag}</button>)}
                        <input className="text-lg my-5 focus:outline-none"
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
                <div className="h-[calc(100%-180px)] absolutebottom-16 z-0">
                    <Editor
                        apiKey={API.TINYMCE_API_KEY}
                        init={{
                            skin: "borderless",
                            plugins: 'anchor autolink autoresize charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
                            autoresize: true,
                            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                            tinycomments_mode: 'embedded',
                            tinycomments_author: 'Author name',
                            mergetags_list: [
                                {value: 'First.Name', title: 'First Name'},
                                {value: 'Email', title: 'Email'},
                            ],
                            placeholder: "당신의 이야기를 적어보세요...",
                            file_picker_types: "image",
                        }}
                        onEditorChange={setContent}
                    />
                </div>
            </div>

            <div className="flex flex-row justify-between w-screen absolute bottom-0 right-0">
                <button className="flex flex-row items-center text-lg text-gray-600"
                        onClick={() => navigate(-1)}>
                    <IoMdArrowBack className="ml-8 mr-2"/>나가기
                </button>
                <button className="bg-teal-500 text-white font-extrabold mx-4 my-2 px-4 py-2 rounded-l"
                        onClick={handleSubmit}>출간하기
                </button>
            </div>
        </>
    )
        ;
}

export default WritePage;