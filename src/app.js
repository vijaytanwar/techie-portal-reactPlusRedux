import React from "react";
import TechieConnector from "./connectors/techie-connector";
import TechieFormConnector from "./connectors/techieFormConnector";
import Header from "./components/Header";
import "./styles/app.css";
const App = () => (
    <div className={"main-container"}>
        <Header />
        <TechieConnector />
        <TechieFormConnector />
    </div>
)

export default App;