import React from 'react';
import mern from '../../../Assets/Skills/mern.jpg'
import js from '../../../Assets/Skills/js-html-css.png'
import tailbs from '../../../Assets/Skills/tail-bs.webp'
import git from '../../../Assets/Skills/git.jpg'

const Skills = () => {

    // const {mern}= logos;

    return (
        <div className='grid lg:grid-cols-2  bg-gradient-to-r from-pink-300 to-purple-600 p-20 '>



            <div className='p-5'>

                <p className='text-3xl font-bold mb-4 '>Skills</p>


                <div className='grid lg:grid-cols-2 gap-16'>
                    <div className="card w-64 h-36 rounded-xl shadow-xl  glass">
                        <figure><img src={mern} alt="Shoes" /></figure>

                    </div>

                    <div className="card w-64 h-36 rounded-xl shadow-xl  glass">
                        <figure><img src={js} alt="Shoes" /></figure>

                    </div>

                    <div className="card w-64 h-36 rounded-xl shadow-xl  glass">
                        <figure><img src={tailbs} alt="Shoes" /></figure>

                    </div>

                    <div className="card w-64 h-36 rounded-xl shadow-xl  glass">
                        <figure><img src={git} alt="Shoes" /></figure>

                    </div>
                </div>




                {/* <p className='mt-1 text-white text-xl font-bold '>
                    Expertise: HTML5, CSS3, Tailwind CSS, Bootstrap <br /> Comfortable: JavaScript, React, MongoDB <br/>
                    Familiar: React Native, JWT, Node.js, Express.js <br /> Tools: Github, Netlify, Firebase, VS Code
                </p> */}
            </div>


            <div className='flex justify-center align-center p-10'>
                <ul className=''>
                    <li><p className='text-2xl'>JavaScript</p>
                        <span><progress className="progress progress-info w-56" value="70" max="100"></progress></span>
                    </li>
                    <li><p className='text-2xl'>React</p>
                        <span><progress className="progress progress-info w-56" value="70" max="100"></progress></span>
                    </li>
                    <li><p className='text-2xl'>HTML5</p>
                        <span><progress className="progress progress-info w-56" value="90" max="100"></progress></span>
                    </li>
                    <li><p className='text-2xl'>CSS3</p>
                        <span><progress className="progress progress-info w-56" value="90" max="100"></progress></span>
                    </li>
                    <li><p className='text-2xl'>Tailwind CSS</p>
                        <span><progress className="progress progress-info w-56" value="100" max="100"></progress></span>
                    </li>
                    <li><p className='text-2xl'>Bootstrap</p>
                        <span><progress className="progress progress-info w-56" value="100" max="100"></progress></span>
                    </li>
                    <li><p className='text-2xl'>MongoDB</p>
                        <span><progress className="progress progress-info w-56" value="50" max="100"></progress></span>
                    </li>
                    <li><p className='text-2xl'>MERN</p>
                        <span><progress className="progress progress-info w-56" value="40" max="100"></progress></span>
                    </li>
                </ul>
            </div>



        </div>





    );
};

export default Skills;