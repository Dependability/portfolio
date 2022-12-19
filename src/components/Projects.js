import Layout from "./Layout";
const projectList = [{
    title: "MyTube",
    tech: ['Node.js', 'Express.js', 'Firebase', 'CSS', 'Javascript'],
    desc: 'A youtube clone that is capable of viewing videos uploaded by users, uploading videos, user authentication, commenting and liking, subscribing, and more',
    live: 'https://www.youtube.com',
    source: 'https://www.github.com',
}]
function Projects() {
    return <Layout><div class='projects'>
        <h1>My <span className='green'>Projects</span></h1>
        {projectList.map((val, ind)=>{

            return (<div className='project-item' key={ind}>
                    <div className='left'>
                    <h2>{val.title}</h2>
                    <p className='tech'><span className='green'>Tech Stack: </span>{val.tech.join(', ')}</p>
                    <p className='desc'>{val.desc}</p>
                    <div class='buttons'>
                        <a className='live' href={val.live} target='_blank'>Live</a>
                        <a href={val.source} target='_blank'>Source</a>
                    </div>
                    </div>
                    <div className='right'>
                        <img src={val.img} alt={val.title}></img>
                    </div>
                 </div>)
        })}
    </div>
    </Layout>
}

export default Projects