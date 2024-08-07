import React from "react";
import kindergartenData from "../../data/programsData/kindergarten";
import ProgramsComponent from "../components/PlaygroupComponent";
const page = () => {
    return (
        <div className="py-20">
            <ProgramsComponent {...kindergartenData} />
        </div>
    );
};

export default page;
