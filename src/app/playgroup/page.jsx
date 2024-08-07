import React from "react";
import playgroupData from "../../data/programsData/playgroup";
import ProgramsComponent from "../components/PlaygroupComponent";
const page = () => {
    return (
        <div className="py-20">
            <ProgramsComponent {...playgroupData} />
        </div>
    );
};

export default page;
