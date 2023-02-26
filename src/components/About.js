import Layout from './Layout';
import css3 from '../assets/icons/css3.png';
import express from '../assets/icons/express.png';
import firebase from '../assets/icons/firebase.png';
import git from '../assets/icons/git.png';
import html5 from '../assets/icons/html5.png';
import javascript from '../assets/icons/javascript.png';
import mongodb from '../assets/icons/mongodb.png';
import node from '../assets/icons/node.png';
import python from '../assets/icons/python.png';
import react from '../assets/icons/react.png';
import webpack from '../assets/icons/webpack.png';
import mongoose from '../assets/icons/mongoose.png'
function About() {

    const skills = [
        {'name': 'HTML','src': html5},
        {'name': 'CSS','src': css3},
        {'name': 'Javascript','src': javascript},
        {'name': 'Python','src': python},
        {'name': 'React','src': react},
        {'name': 'Node','src': node},
        {'name': 'Express','src': express},
        {'name': 'MongoDB','src': mongodb},
        {'name': 'Firebase','src': firebase},
        {'name': "Git",'src': git},
        {'name': 'Webpack','src': webpack},
        {name: 'Mongoose', src: mongoose}

    ]
    return <Layout>
        <div className='about'>
            <div className='title'>
                <h2>About Me</h2>
            </div>
            <div className='description'>
                <p>I am Seyi Bakare, a full-stack developer, college student, and lifelong learner.
                    I love problem solving and seeing what I am capable of figuring out every day.
                </p>
                <p>
                    I became interested in coding my freshman year of High school in 2017. I knew about 
                    coding before then, but when I tried to create something, I would ultimately end up confused. I then learned the basics
                    of computer science and realized that it was just problem solving at it's core. This intrigued me and caused me want to pursue a
                    career in the field.
                    </p>
                    <p>
                    When I turned 18, I started to do freelancing, and have only recieved 5 stars on the site, <a href='https://www.upwork.com/freelancers/~01cd936a9b73de299d' >Upwork.com</a>
                    . I was mostly just doing simple tweaks to existing code, web scraping, API utilization, and task-repeating bots. I wanted to do more taxing work, such as, front-end development
                    and intertwining front-end and back-end, but I knew that it was not recommended to do so freelancing. 
                    </p><p>
                    I enjoy teaching myself new skills and technologies. I decided to learn more front-end, so I went and learned many languages and technologies pertaining to front-end.
                    </p><p>
                    Besides coding, I enjoy playing basketball, watching shows and anime, and playing video games.
                </p>
                <p className='tech-desc'>
                    Here are some of the Tools & Technologies, I am familiar with:
                </p>
            </div>
            <hr></hr>
            <div className='technologies'>
                <h2>Skills <span className='green'>& Tools</span></h2>
                <div className='skills'>
                    {skills.map(({name, src}, index)=> {
                        return <div className='skillItem' key={index}>
                            <img src={src} alt='' />
                            <span className='name'>{name}</span>
                            </div>
                    })}
                </div>
                
            </div>
        </div>
    </Layout>
}
export default About;