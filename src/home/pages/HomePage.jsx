import React from "react";
import DirectoryMenu from "../components/DirectoryMenu";
import { Outlet } from "react-router-dom";


const HomePage = () => {
    return(
        <div>
            <Outlet/>
            <DirectoryMenu/>
        </div>
    )
}

export default HomePage;