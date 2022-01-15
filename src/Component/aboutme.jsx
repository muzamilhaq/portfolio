import React from "react";
import circleImage from "./img/imagecircle.png"

function About(){
    return (
        <div id="aboutme" className="bg-opacity-5 bg-teal-500 flex mb-10">
            <div className="px-15percent md:mx-24 my-10">
                <h3 className=" text-center text-3xl font-bold text-teal-500">Biodata</h3>
                <div className="flex justify-center">
                    <img className=" my-5 w-44 " src={circleImage} alt="circlephoto"/>
                </div>
                <p className="text-center font-medium text-lg font-sans lg:px-15percent">Hi, my name is Muzamil Haq, and I'm 27 years old. I'm very interested in technology, especially programming, and I previously studied at the Putra Indonesia University. Since graduating from college, I've assisted several people who require my programming skills, such as the Padang Religious Court in Indonesia, where I created native android applications for asset management. I can also create augmented reality applications and perform website enhancements, such as landing pages and API servers.</p>
                <div className="flex lg:px-15percent mt-10">
                    <div className="w-1/2 mx-5 text-center">
                        <h3 className="text-lg font-bold">Skills</h3>
                        <p className="text-base font-semibold">Javascript / Java Native / HTML / CSS / React / Jquery / Python / 3D Modelling</p>
                    </div>
                    <div className="w-1/2 mx-5 text-center">
                        <h3 className="text-lg font-bold">Services</h3>
                        <p className="text-base font-semibold">UX & UI / Website Builder / Android Programming / 3D Modelling /  </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;