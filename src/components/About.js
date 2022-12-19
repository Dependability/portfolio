import Layout from './Layout';

function About() {
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
                <h2>Skills & Tools</h2>
                {/* go through a list to display alot of them */}
            </div>
        </div>
    </Layout>
}
export default About;