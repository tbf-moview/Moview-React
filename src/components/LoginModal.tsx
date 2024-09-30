import {emailLogin, emailSignup, moveGoogleLogin, moveKakaoLogin} from "../api/loginApi.tsx";
import {useState} from "react";

function LoginModal({showModal, setShowModal}:
                        { showModal: boolean, setShowModal: (show: boolean) => void }) {

    const [email, setEmail] = useState('');

    const [toggleText, setToggleText] = useState("로그인");

    const toggleTextHandle = () => {
        if (toggleText === '로그인') {
            setToggleText('회원가입')
        } else {
            setToggleText('로그인')
        }
    }

    const loginText = '계정이 이미 있으신가요?'
    const signupText = '아직 회원이 아니신가요?'

    return showModal ? (<div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
        >
            <div className="relative w-96 my-6 mx-auto max-w-3xl"
                 onClick={(e) => e.stopPropagation()}>
                <div
                    className="w-auto border-0 rounded-lg shadow-lg relative flex flex-col justify-center items-center bg-white outline-none focus:outline-none">
                    <h3 className="font-semibold text-xl w-full px-8 mt-12 mb-6">
                        {toggleText}
                    </h3>
                    <div className="my-4 px-4 w-fit">
                        <h4 className="text-gray-500">
                            이메일로 {toggleText}
                        </h4>
                        <div className="flex flex-row my-4 h-12">
                            <input className="border w-full ps-4 focus:outline focus:outline-emerald-500" type="text"
                                   placeholder="이메일을 입력하세요."
                                   value={email}
                                   onClick={(e) => e.stopPropagation()}
                                   onChange={(e) => setEmail(e.target.value)}/>
                            <button className="bg-emerald-500 w-32 text-white" onClick={() =>
                                (toggleText === '로그인') ? emailLogin(email) : emailSignup(email)
                            }>
                                {toggleText}
                            </button>
                        </div>
                    </div>
                    <div className="my-4 px-4 w-full">
                        <h4 className="text-gray-500 w-full px-4">
                            소셜 계정으로 {toggleText}
                        </h4>
                        <div className="flex flex-row justify-around items-center my-4">
                            <img className="w-12 hover:cursor-pointer" src="/kakao-talk.png" alt="kakao-login"
                                 onClick={(e) => {
                                     e.stopPropagation()
                                     moveKakaoLogin()
                                 }}/>
                            <img className="w-12 hover:cursor-pointer" src="/naver_btnG_circle.png" alt="kakao-login" onClick={(e) => {
                                e.stopPropagation()
                                alert("준비중입니다")
                                // moveNaverLogin()
                            }}/>
                            <img className="w-12 hover:cursor-pointer" src="/google_web_light_rd_na@4x.png" alt="kakao-login"
                                 onClick={() => {
                                     // e.stopPropagation()
                                     // alert("준비중입니다")
                                     moveGoogleLogin()
                                 }}/>
                        </div>
                    </div>
                    <div className="flex flex-row justify-end w-full mr-12 my-4">
                        <div className="font-normal text-emerald-500 mr-2">
                            {(toggleText === '로그인') ? signupText : loginText}
                        </div>
                        <div className="font-semibold text-emerald-500 hover:cursor-pointer" onClick={(e) => {
                            e.stopPropagation()
                            toggleTextHandle()
                        }}>
                            {(toggleText === '로그인') ? '회원가입' : '로그인'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
}

export default LoginModal;