import React from "react";
import {MainContainer} from "./containers/MainContainer/MainContainer.tsx";
import {CentralComponent} from "./components/CentralComponent/CentralComponent.tsx";
import {BottomText} from "./components/BottomText/BottomText.tsx";


function App() {
    return (
        <MainContainer>
            <CentralComponent/>
            <BottomText/>
        </MainContainer>
    )
}

export default App
