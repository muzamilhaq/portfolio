import React from "react";

function card(props){
    return(
        <div className="lg:basis-1/3 sm:basis-1/2">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:bg-teal-300 transition duration-300 ease-in" >
                <img src={props.img} alt="project-1" className="w-full object-cover object-center"/>
                <div className="p-6  hover:text-white transition duration-300 ease-in">
                    <h2 className="text-base font-medium text-indigo-300 mb-1">29 Oktober 2021</h2>
                    <h1 className="text-2xl font-semibold mb-3">{props.judul}</h1>
                    <p className="leading-relaxed mb-3">
                        {props.deskripsi}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default card;