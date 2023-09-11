import React from "react";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Container from "./Container";

const MainSection=()=>{

    return(
        <div className="main">
            <LeftSidebar/>
            <Container/>
            <RightSidebar/>
        </div>
    );
};

export default MainSection;