import {ReactNode} from "react";

function IndexReviewLayout({children}: {children: ReactNode}) {

    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12 mx-1.5">
            {children}
        </div>
    );
}

export default IndexReviewLayout;