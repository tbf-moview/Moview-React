import BasicLayout from "../layout/BasicLayout.tsx";
import IndexTab from "../components/index/IndexTab.tsx";

function MainPage() {

    return (
        <BasicLayout bgColor="bg-gray-100">
            <IndexTab/>
        </BasicLayout>
    );
}

export default MainPage;