import {MoveKakaoLogin} from "../api/kakaoApi.tsx";

function LoginModal({showModal, setShowModal}:
                        { showModal: boolean, setShowModal: (show: boolean) => void }) {

    return showModal ? (<div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
        >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div
                    className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div
                        className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                            LogIn
                        </h3>
                    </div>
                    <button className="relative p-6 flex-auto" onClick={(e) => {
                        e.stopPropagation()
                        MoveKakaoLogin()
                    }}>
                        <img src="/kakao_login_medium_narrow.png" alt="kakao-login"/>
                    </button>
                </div>
            </div>
        </div>
    ) : null;
}

export default LoginModal;