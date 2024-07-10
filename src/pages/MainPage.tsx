import BasicLayout from "../layout/BasicLayout.tsx";
import TabView from "../components/TabView.tsx";

function MainPage() {

    return (
        <BasicLayout bgColor="bg-gray-100">
            <TabView/>
        </BasicLayout>
    );
}

export default MainPage;