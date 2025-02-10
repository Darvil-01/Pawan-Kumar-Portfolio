import { BorderBeam } from '@stianlarsen/border-beam';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Skill = () => {
    return (
        <div id='skill' className='pb-10 pt-8 bg-black'>
            <div className="flex items-center justify-center pt-14 pb-14 bg-black text-white px-8 text-center">
                <div>
                    <h1 className="text-4xl mb-4">Skills That Define Me</h1>
                    <p className='text-xl pb-5'> All Skills Here !! <span style={{    color: '#BB86FC' }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={['Mern Specialist','Front End ', 'Eye Attractive Design', " User Friendly Web App", " Responsive Design", 'Javascript', 'React', 'Node Js', 'Mongodb','Express', 'Firebase', 'Taiwind', 'Css', 'Html', ' Git', 'Github', '!']}
                            loop={Infinity}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            
                        />
                    </span></p>
                    <p className="  text-gray-300 text-base">
                        A showcase of my expertise and tools of the trade, reflecting my journey in mastering <br /> technology and design. These skills drive my creativity and innovation in every project.
                    </p>
                </div>
            </div>


            <div className="pt-8 pb-14 bg-black text-white px-8 text-center">
                <div className="xl:w-9/12 mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 gap-y-16 place-items-center">

                    {/* JS Icon with smaller image */}
                    <div className="relative p-4">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                            alt="JS Icon"
                            className="h-16 w-16 object-contain transform transition duration-2000 ease-in-out hover:scale-120 hover:shadow-lg hover:shadow-white"
                        />
                        <BorderBeam size={300} duration={10} colorFrom={'#D3D3D3'} colorTo={'#FFD700'} />
                    </div>

                    {/* React Icon with smaller image */}
                    <div className="relative p-4">
                        <img
                            src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"
                            alt="React Icon"
                            className="h-16 w-16 object-contain transform transition duration-2000 ease-in-out hover:scale-120 hover:shadow-lg hover:shadow-white"
                        />
                        <BorderBeam size={300} duration={10} colorFrom={'#87CEEB'} colorTo={'#00BFFF'} />
                    </div>

                    {/* MongoDB Icon with smaller image */}
                    {/* <div className="relative p-4">
                        <img
                            src="https://pbs.twimg.com/profile_images/1452637606559326217/GFz_P-5e_400x400.png"
                            alt="MongoDB Icon"
                            className="h-16 w-16 object-contain transform transition duration-2000 ease-in-out hover:scale-120 hover:shadow-lg hover:shadow-white"
                        />
                        <BorderBeam size={300} duration={10} colorFrom={'#4CAF50'} colorTo={'#006800'} />
                    </div> */}

                    {/* HTML Icon with smaller image */}
                    <div className="relative p-4">
                        <img
                            src="https://w7.pngwing.com/pngs/584/376/png-transparent-html-logo-world-wide-web-consortium-font-family-html-tag-sale-tag-text-happy-birthday-vector-images-thumbnail.png"
                            alt="HTML Icon"
                            className="h-16 w-16 object-contain transform transition duration-2000 ease-in-out hover:scale-120 hover:shadow-lg hover:shadow-white"
                        />
                        <BorderBeam size={300} duration={10} colorFrom={'#F44336'} colorTo={'#F44336'} />
                    </div>

                    {/* CSS Icon with smaller image */}
                    <div className="relative p-4">
                        <img
                            src="https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-css-file-document-icon-png-image_927823.jpg"
                            alt="CSS Icon"
                            className="h-16 w-16 object-contain transform transition duration-2000 ease-in-out hover:scale-120 hover:shadow-lg hover:shadow-white"
                        />
                        <BorderBeam size={300} duration={10} colorFrom={'#0000CD'} colorTo={'#BBDEFB'} />
                    </div>

                    {/* NodeJS Icon with smaller image */}
                    <div className="relative p-4">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRgfZ2sG6xWL_Ag0kASTIytHshA2F419syVg&s"
                            alt="NodeJS Icon"
                            className="h-16 w-16 object-contain transform transition duration-2000 ease-in-out hover:scale-120 hover:shadow-lg hover:shadow-white"
                        />
                        <BorderBeam size={300} duration={10} colorFrom={'#25D366'} colorTo={'#90EE90'} />
                    </div>

                    {/* Tailwind Icon with smaller image */}
                    <div className="relative p-4">
                        <img
                            src="https://www.loopple.com/img/tailwind-logo.png"
                            alt="Tailwind Icon"
                            className="h-16 w-16 object-contain transform transition duration-2000 ease-in-out hover:scale-120 hover:shadow-lg hover:shadow-white"
                        />
                        <BorderBeam size={300} duration={10} colorFrom={'#FFB6C1'} colorTo={'#E1306C'} />
                    </div>

                    {/* Firebase Icon with smaller image */}
                    <div className="relative p-4">
                        <img
                            src="https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png"
                            alt="Firebase Icon"
                            className="h-16 w-16 object-contain transform transition duration-2000 ease-in-out hover:scale-120 hover:shadow-lg hover:shadow-white"
                        />
                        <BorderBeam size={300} duration={10} colorFrom={'#8B0000'} colorTo={'#FF4500'} />
                    </div>

                    {/* Express Icon with smaller image */}
                    {/* <div className="relative p-4">
                        <img
                            src="https://logowik.com/content/uploads/images/express-js1720895493.logowik.com.webp"
                            alt="Express Icon"
                            className="h-16 w-16 object-contain transform transition duration-2000 ease-in-out hover:scale-120 hover:shadow-lg hover:shadow-white"
                        />
                        <BorderBeam size={300} duration={10} colorFrom={'#D3D3D3'} colorTo={'#808080'} />
                    </div> */}

                    {/* Git Icon with smaller image */}
                    <div className="relative p-4">
                        <img
                            src="https://img.icons8.com/p1em/512/FFFFFF/git.png"
                            alt="Git Icon"
                            className="h-16 w-16 object-contain transform transition duration-2000 ease-in-out hover:scale-120 hover:shadow-lg hover:shadow-white"
                        />
                        <BorderBeam size={300} duration={10} colorFrom={'#6A0DAD'} colorTo={'#FF69B4'} />
                    </div>

                    {/* GitHub Icon with smaller image */}
                    <div className="relative p-4">
                        <img
                            src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_640.png"
                            alt="GitHub Icon"
                            className="h-16 w-16 object-contain transform transition duration-2000 ease-in-out hover:scale-120 hover:shadow-lg hover:shadow-white"
                        />
                        <BorderBeam size={300} duration={10} colorFrom={'#5F9EA0'} colorTo={'#5F9EA0'} />
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Skill;
