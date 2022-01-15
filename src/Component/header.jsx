import Navbar from "./navbar";
import img from "./img/tphoto.png";
import Tilt from "react-tilt";
import Typewriter from "typewriter-effect";
import './headerstyle.css';
import project from "./projectlist";



export default function Header(){

    function onAboutMe(){
        const element = document.getElementById("aboutme");
        element.scrollIntoView({behavior:"smooth"});
    }

    function onProject(){
        const element = document.getElementById("project");
        element.scrollIntoView({behavior:"smooth"});
    }

    return (
        <div className="flex flex-col">
            <div>
                <Navbar/>
            </div>
            <div className="flex flex-col-reverse md:flex-row justify-between grow mx-24" >

                <div className="md:w-1/2 md:m-auto md:z-10 md:-mr-20 my-5">  
                    <div>
                        <p className="text-xl md:text-6xl font-light">Hello, </p>
                        <div className="text-xl md:text-6xl font-black text-teal-500 md:mt-5">
                            <Typewriter options={{strings: [' I\'m Zam', ' I\'m Software Engineer'],autoStart: true,loop: true}}/>
                        </div>
                    </div>

                    <p className="text-base md:text-2xl font-bold py-5">For the past four years, I've worked as a software engineer, assisting numerous firms and projects in developing the technology systems they require, such as websites and mobile applications, as well as developing server programs.</p>
                    
                    <div>
                        <p className="text-xl">
                        <span className="font-extrabold text-base md:text-2xl text-teal-500 hover:text-teal-300"><a onClick={onAboutMe}>More About Me </a></span> 
                        or 
                        <span className="font-extrabold text-base md:text-2xl text-teal-500 hover:text-teal-300" ><a onClick={onProject}> Projects</a></span>
                        </p>
                    </div>
                </div>

                <div className="w-1/2 ">
                    <img className="md:max-w-xl max-w-xs m-auto" src={img} alt="home" />
                </div>
            </div>
        </div>
    )
}