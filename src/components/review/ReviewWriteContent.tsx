import {Editor} from "@tinymce/tinymce-react";
import API from "../../styles/config.tsx";

function ReviewWriteContent({content, setContent}: {content: string, setContent: (content: string) => void }) {

    return (
        <div className="h-[calc(100%-248px)] absolutebottom-16 z-0">
            <Editor
                apiKey={API.TINYMCE_API_KEY}
                init={{
                    plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
                    autoresize: false,
                    menubar: false,
                    statusbar: false,
                    inline_boundaries: false,
                    toolbar: 'undo redo | h1 h2 h3 h4 | bold italic underline strikethrough | align lineheight | checklist numlist bullist indent outdent | blockquote link code',
                    placeholder: "당신의 이야기를 적어보세요...",
                    file_picker_types: "image",
                }}
                value={content}
                onEditorChange={setContent}
            />
        </div>
    );
}

export default ReviewWriteContent;