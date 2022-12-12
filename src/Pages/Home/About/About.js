import React from 'react';

const About = () => {
  return (
    <div className='bg-gradient-to-r from-pink-300 to-purple-600 p-20 '>
      <div className="grid lg:grid-cols-2 bg-gradient-to-r from-pink-300 to-purple-600   ">
        {/* <figure><img className='mask mask-triangle-4' src="https://placeimg.com/400/400/arch" alt="Album"/></figure> */}
        
        <div className=" ">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className=' text-white font-bold'>“Passionate and driven learner and <br />
            seeking an internship position as a Frontend Developer. <br />
            complited peers for 15+ different projects on JavaScript, React,<br/> HTML5 and CSS3.  
            Developed skills such as MERN Stack Development.”

          </p>

          <div className="">
            

            <p className='mt-1  text-white'></p>Course: Programming Hero— Complete Web Development Course  <br />
            <p className='mt-1  text-white'></p>Education: University of London — Diploma-in-Law<br />
            Strong adjectives:
            Detail-oriented and attentive <br />
            Achievements: 15+ different projects on Frontend Development <br/>
            Professional title: Frontend Developer <br />

            Career goals: Grow further in Full Stack Development


          </div>
          <div className='py-5'>
  
  <p className='text-3xl font-bold '>Skills</p>
              <p className='mt-1 text-white font-bold'>
                Expertise: HTML5, CSS3, Tailwind CSS, Bootstrap <br /> Comfortable: JavaScript, React, MongoDB,
                Familiar: React Native, Redux, JWT, Node.js, and Express.js <br /> Tools: Github, Netlify, Firebase, VS Code
              </p>
  
  </div>

        </div>
        
        
        <div className=''>
          


        <div className='flex justify-center align-center'>
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
        

       
      </div>
    </div>
  );
};

export default About;