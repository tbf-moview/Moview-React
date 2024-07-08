import {ReactNode} from 'react';

function TabBar({children}: {children: ReactNode}) {
    return (
        <div className="flex flex-row justify-between items-center text-lg font-extrabold">
            {children}
        </div>
    );
}

export default TabBar;