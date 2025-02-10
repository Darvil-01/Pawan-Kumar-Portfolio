import wethApp from './assets/weatherApp.png';
import accident from './assets/Accident-Detection-System.png';   
import netflix from './assets/netflix-thumbnail.png';
import img_gen from './assets/openAi img generator.png';
import Swal from 'sweetalert2';

const Works = () => {
    const projects = [
        {
            title: "Netflix",
            image: netflix,
            link: "https://net-flix-clone-5jf6.vercel.app/",
            date: "January 2025",
            tech: "React, Redux,Custom Hook react-icon,CSS, Firbase, TMDB API",
            video:""
            
        },
        {
            title: "Image Generator (Note:- Due to billing conflict OpenAI is not working",
            image: img_gen,
            link: "https://drive.google.com/file/d/16Xsn-vAHu2_yzaSRsEoDwPsGLQrHrtjV/view?usp=sharing",
            date: "January 2025",
            tech: "React, OpenAI, Tailwind CSS",
            video:"https://drive.google.com/file/d/16Xsn-vAHu2_yzaSRsEoDwPsGLQrHrtjV/view?usp=sharing"
        },
        {
            title: "Weather App",
            image: wethApp,
            link: "https://weather-app-self-delta-57.vercel.app/",
            date: "December 2024",
            tech: "React, CSS, OpenWheather API, Custom Hook",
            video:""
        },
        {
            title: "Accident Detection System",
            image: accident,
            link: "https://github.com/Darvil-01/Accident-Detection-System",
            date: "April 2024",
            tech: "Python, DeepLearning, Conv3D(CNN), LSTM, TensorFlow, Google Colab",
            video:""
        },
    ];

    const showTechDetails = (techStack) => {
        Swal.fire({
            title: '🚀 Technologies Used',
            text: `${techStack} 💻`,
            icon: 'info',
            confirmButtonText: 'Close 😊',
            confirmButtonColor: '#6a0dad',
        });
    };
    
    return (
        <div id='work' className="bg-black text-white py-14 px-6 flex flex-col items-center">
            <h2 className="text-4xl text-center uppercase tracking-wide">
                My Works
            </h2>
            <p className='mb-14 mt-5 text-center'>
                A showcase of innovative projects that blend creativity with functionality.
            </p>

            <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-12 border-l-4 xl:border-l-0 xl:border-gray-600 pl-6 xl:pl-0 items-center justify-center">
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        className={`relative pb-10 xl:pb-16 flex flex-col lg:flex-row xl:flex-row items-center justify-center xl:gap-6 ${
                            index % 2 === 0 ? "xl:flex-row" : "xl:flex-row-reverse"
                        }`}
                    >
                        <div className="w-10 h-10 bg-purple-950 rounded-full border-2 border-white"></div>

                        <div className="bg-gray-900/80 p-6 rounded-lg shadow-xl backdrop-blur-md border border-gray-700 transform hover:-translate-y-2 transition-all duration-300 w-full max-w-md text-center">
                            <h3 className="text-2xl   mb-2 text-purple-500 hover:text-white transition">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 mb-4 italic">{project.date}</p>

                            <div className="relative group">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-48 object-contain rounded-lg shadow-lg transition-transform group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition-all"></div>
                            </div>

                            {/* Button Group */}
                            <div className="flex flex-col xl:flex-row gap-4 items-center justify-center mt-4">
                               { project.video=="" ? (<a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2 rounded-lg   bg-white cursor-pointer hover:bg-purple-500 text-purple-600 hover:text-white font-boldtransition w-full max-w-xs text-center"
                                >
                                    View Site →
                                </a>):
                                <a
                                    href={project.video}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2 rounded-lg   bg-white cursor-pointer hover:bg-purple-500 text-purple-600 hover:text-white font-boldtransition w-full max-w-xs text-center"
                                    >
                                    Demo video →
                                </a>
                                
                                }

                                <button
                                    onClick={() => showTechDetails(project.tech)}
                                    className="px-6 py-2 rounded-lg   bg-gray-700 text-white cursor-pointer hover:bg-purple-500 hover:text-white w-full max-w-xs text-center"
                                >
                                    Technologies Used
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Works;
