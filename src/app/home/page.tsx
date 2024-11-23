import HomeCompletedTask from "@/components/HomeCompletedTask";
import HomeOngoinTask from "@/components/HomeOngoinTask";
import HomeTodoTask from "@/components/HomeTodoTask";
import React from "react";

const componentName = () => {
    return (
        <div className="grid grid-cols-3 gap-4  ms-52">
            <div>
                <h3 className="text-3xl text-center"> To Do Task</h3>
                <HomeTodoTask />
            </div>
            <div>
                <h3 className="text-3xl text-center"> To Do Task</h3>
                <HomeOngoinTask />
            </div>
            <div>
                <h3 className="text-3xl text-center"> To Do Task</h3>
                <HomeCompletedTask />
            </div>
        </div>
    );
};

export default componentName;
