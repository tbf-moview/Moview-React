import {useState} from 'react';
import {postReview} from "../../api/reviewApi.tsx";
import {IoMdArrowBack} from "react-icons/io";
import {useNavigate} from "react-router-dom";
import stringToImageArray from "../../util/base64ToImage.tsx";
import {ReviewRequest} from "../../common/types/reviewType.tsx";
import ReviewWriteTitle from "../../components/review/ReviewWriteTitle.tsx";
import ReviewWriteTag from "../../components/review/ReviewWriteTag.tsx";
import ReviewWriteContent from "../../components/review/ReviewWriteContent.tsx";


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
            tags: tag,
            texts: contentArray,
            images: imageArray
        }
        console.log(reviewRequest);

        try {
            const response = await postReview(reviewRequest)

            if (response.status === 201) {
                alert('작성 완료되었습니다')
                navigate('/')
            } else {
                alert('문제가 발생했습니다 다시 시도해주세요')
            }

        } catch (error) {
            alert('서버 요청 오류: ' + error)
        }
    };

    return (
        <div className="h-screen max-w-screen-md mx-auto">
            <div className="h-screen">
                <ReviewWriteTitle title={title} setTitle={setTitle}/>
                <ReviewWriteTag tag={tag} tagString={tagString} tagChange={tagChange} showTag={showTag}
                                setShowTag={setShowTag} removeTag={removeTag}/>
                <ReviewWriteContent content={content} setContent={setContent}/>
            </div>

            <div className="flex flex-row justify-between w-screen absolute bottom-0 right-0">
                <button className="flex flex-row items-center text-lg text-gray-600"
                        onClick={() => navigate(-1)}>
                    <IoMdArrowBack className="ml-8 mr-2"/>나가기
                </button>
                <button className="bg-teal-500 text-white font-semibold mx-4 my-2 px-4 py-2 rounded-md"
                        onClick={handleSubmit}>출간하기
                </button>
            </div>
        </div>
    )
        ;
}

export default WritePage;