import React, {useState} from 'react';
import {Editor} from "@tinymce/tinymce-react";
import BasicLayout from "../../layout/BasicLayout.tsx";
import axios from "axios";
import API from "../../styles/config.tsx";

function WritePage() {
    const [content, setContent] = useState('');

    const handleEditorChange = (content, editor) => {
        console.log(content);
        console.log(editor);
        setContent(content);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post(
                'http://localhost:8080/review',
                { content }
            );
            console.log('서버 응답:', response.data);
        } catch (error) {
            console.error('서버 요청 오류:', error);
        }
    };

    return (
        <BasicLayout>
            <Editor
                apiKey={API.TINYMCE_API_KEY}
                init={{
                    plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
                    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                    tinycomments_mode: 'embedded',
                    tinycomments_author: 'Author name',
                    mergetags_list: [
                        {value: 'First.Name', title: 'First Name'},
                        {value: 'Email', title: 'Email'},
                    ],
                    ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                }}
                initialValue="Welcome to TinyMCE!"
                onEditorChange={handleEditorChange}
            />
            <div className="flex flex-row justify-end">
                <button className="bg-teal-500 text-white font-extrabold mx-4 my-2 px-4 py-2 rounded-l"
                        onClick={handleSubmit}>출간하기
                </button>
            </div>
        </BasicLayout>
    );
}

export default WritePage;