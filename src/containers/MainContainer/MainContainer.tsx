import {PropsWithChildren} from "react";
import "./MainContainer.scss"

interface MainContainerProps {
}

export const MainContainer = (props: PropsWithChildren<MainContainerProps>) => {
    return (
        <div className="main_container">
            {props.children}
        </div>
    );
};