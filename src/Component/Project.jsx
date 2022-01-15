import React from "react";
import Card from "./card";


import projectlist from "./projectlist.js"

function createCard(projectlist) {
  return (
    <Card
      key={projectlist.id}
      name={projectlist.name}
      img={projectlist.imgURL}
      judul={projectlist.judul}
      deskripsi={projectlist.deskripsi}
    />
  );
}

function project(){
    return(
        <div id="project" className="px-15percent my-10">
            <h3>The project that I have made</h3>
            <h1 className="text-3xl font-extrabold">Project</h1>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 mt-3">
                {
                    projectlist.map(createCard)
                }
            </div>
        </div>
    )
}

export default project;