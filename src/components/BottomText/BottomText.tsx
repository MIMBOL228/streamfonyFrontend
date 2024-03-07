import {PropsWithChildren} from "react";
import "./BottomText.scss"

interface BottomTextProps {
}

export const BottomText = (props: PropsWithChildren<BottomTextProps>) => {
    return (
        <div className="bottom_text">
            <p className="bottom_text">В разработке</p>
        </div>
    );
};