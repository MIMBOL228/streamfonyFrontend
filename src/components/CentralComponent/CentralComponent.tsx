import {PropsWithChildren} from "react";
import logo from "../../assets/logo.svg";
import "./CentralComponent.scss"

interface CentralComponentProps {
}

export const CentralComponent = (props: PropsWithChildren<CentralComponentProps>) => {
    return (
        <div className="central_component">
            <div className="logo">
                <img src={logo} alt="Логотип" className="logo"/>
            </div>
            <div className="central_text">
                <h1>Streamfony</h1>
            </div>
        </div>
    );
};