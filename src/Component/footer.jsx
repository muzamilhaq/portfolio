import React from "react";

function footer(){
    return(
        <div className="bg-opacity-5 bg-teal-500 py-10">
            <div className="grid  sm:grid-cols-1 md:grid-cols-5 px-15percent ">
                <div className="flex flex-col  col-span-2 m-2">
                    <h1 className="text-xl font-semibold mb-2">Contact Information</h1>
                    <p>Please do not hesitate to contact me at any moment. I prefer to communicate via email, especially when we may be separated by several time zones.</p>
                    <p>Email : Muzamilhaq.pongowork@gmail.com</p>
                    <p>Phone : +62 823 8689 0618</p>
                </div>
                <div className="flex flex-col m-2">
                    <h1 className="text-xl font-semibold mb-2">Last Projects</h1>
                    <a>Emaint</a>
                    <a>lumut suliki</a>
                    <a>pa 50 kota</a>
                    <a>e-assessment</a>
                </div>
                <div className="flex flex-col m-2">
                    <h1 className="text-xl font-semibold mb-2">Current availability</h1>
                    <p>I normally work on numerous projects at once, but I am always open to new ideas. Let's talk about it.</p>
                </div>
                <div className="flex flex-col m-2">
                    <h1 className="text-xl font-semibold mb-2">Follow me on</h1>
                    <a>Instagram</a>
                    <a>Twitter</a>
                </div>
            </div>
        </div>
    )
}

export default footer;