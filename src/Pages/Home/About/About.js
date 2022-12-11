import React from 'react';

const About = () => {
    return (
        <div className='bg-gradient-to-r from-pink-300 to-purple-600'>
          <div className="card lg:card-side bg-gradient-to-r from-pink-300 to-purple-600  ">
        <figure><img className='mask mask-triangle-4' src="https://placeimg.com/400/400/arch" alt="Album"/></figure>
        <div className="card-body">
          <h2 className="text-4xl">About Me</h2>
          <p className=' text-white'>“Passionate and driven learner and <br/>
           seeking an internship position as a Frontend Developer. <br/>
            complited peers for 15+ different projects on JavaScript, React, HTML5 and CSS3.  <br/>
          Developed skills such as MERN Stack Development.”  

</p>

          <div className="">
<p className='text-2xl'>Skills</p>
<p className='mt-1'>
Expertise: HTML5, CSS3, Tailwind CSS, Bootstrap <br/> Comfortable: JavaScript, React, MongoDB, 
Familiar: React Native, Redux, JWT, Node.js, and Express.js <br/> Tools: Github, Netlify, Firebase, VS Code
</p>

          <p className='mt-1  text-white'></p>Course: Programming Hero— Complete Web Development Course, July 2022- Nov 2022  <br/>
          <p className='mt-1  text-white'></p>Education: University of London — Diploma-in-Law, 2009 – 2011<br/>
Strong adjectives: 
Detail-oriented and attentive <br/>
Achievements: 15+ different projects on Frontend Development
Professional title: Frontend Developer <br/>

Career goals: Grow further in Full Stack Development

          
          </div>
        </div>
      </div>
        </div>
    );
};

export default About;