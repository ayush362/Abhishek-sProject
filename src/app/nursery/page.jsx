import React from "react";
import nurseryData from "../../data/programsData/nursery";
import ProgramsComponent from "../components/PlaygroupComponent";
const page = () => {
    return (
        <div className="py-20">
            <ProgramsComponent {...nurseryData} />
        </div>
    );
};

export default page;
