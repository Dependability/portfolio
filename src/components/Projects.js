import { mdiOpenInNew, mdiXml } from "@mdi/js";
import Icon from "@mdi/react";
import Layout from "./Layout";
import battleship from '../assets/previews/battleship.png';
import myTube from '../assets/previews/myTube.png';
import Knight from '../assets/previews/Knight-Travails.png';
import TicTacToe from '../assets/previews/Tic-Tac-Toe.png';
import waldo from '../assets/previews/waldo.png';
import odinbook from '../assets/previews/odinbook.png';
import blog from '../assets/previews/blog-client.png';
import membersonly from '../assets/previews/members-only.png';
import cvproject from '../assets/previews/cv-project.png';

const projectList = [{
    title: "MyTube",
    tech: ['React', 'Firebase', 'CSS', 'Javascript'],
    desc: 'A youtube clone that is capable of viewing videos uploaded by users, uploading videos, user authentication, commenting and liking, subscribing, and more. Database is hosted on Firebase.',
    live: 'https://dependability.github.io/myTube',
    source: 'https://github.com/Dependability/myTube',
    preview: myTube
}, {
    title: "OdinBook",
    tech: ['Node.js', 'Express.js', 'Heroku', 'CSS', 'Javascript', 'MongoDB', 'React'],
    desc: 'A facebook clone that does the basics of facebook. You can create a profile, create posts, and make friends! Back-end is hosted on Heroku and uses Express. Database uses MongoDB and Mongoose. Front-end uses React.',
    live: 'https://dependability.github.io/odin-book-client',
    source: 'https://github.com/Dependability/odin-book-client',
    preview: odinbook
}, {
    title: "Where's Waldo",
    tech: ['React', 'Firebase', 'CSS', 'Javascript'],
    desc: 'A game where you must find "Waldo". This is based off the books and puzzles, "Where\'s waldo". Features include a leaderboard system and database that is hosted on Firebase',
    live: 'https://dependability.github.io/wheres-waldo',
    source: 'https://www.github.com/Dependability/wheres-waldo',
    preview: waldo
},{
    title: "Blog Client and API",
    tech: ['Node.js', 'Express.js', 'Heroku', 'CSS', 'Javascript', 'React', 'MongoDB'],
    desc: 'A simple blog site that allows users to make posts and comment. A good show of React and Express abilities. Database uses MongoDB',
    live: 'https://dependability.github.io/blog-client',
    source: 'https://www.github.com/Dependability/blog-client',
    preview: blog
},{
    title: "CV Project",
    tech: ['React', 'CSS', 'Javascript'],
    desc: 'Small project that uses React to manipulate DOM and create a CV that the user can change to liking. ',
    live: 'https://dependability.github.io/Cv-Project',
    source: 'https://www.github.com/Dependability/Cv-Project',
    preview: cvproject
},{
    title: "Knight Travails Simulation",
    tech: ['CSS', 'Javascript', 'Node.js', 'Webpack'],
    desc: 'A site that computes the shortest path to a square possible, but in the route of a Knight chess piece. This uses Depth First Search (DFS) to compute the shortest path possible.',
    live: 'https://dependability.github.io/Knight-Travails',
    source: 'https://www.github.com/Dependability/Knight-Travails',
    preview: Knight
},{
    title: "Battleship with smart AI",
    tech: ['CSS', 'Javascript', 'HTML', "Webpack"],
    desc: 'Simple battleship game, but the AI does smart shooting. An example is that if it gets a hit, it will only try to hit squares that can possibly lead to the next part of the ship. You may also see that it will only do shots that make sense.',
    live: 'https://dependability.github.io/Battleship',
    source: 'https://www.github.com/Dependability/Battleship',
    preview: battleship
},{
    title: "Member's Only",
    tech: ['Node.js', 'Express.js', 'Heroku', 'CSS', 'Javascript', 'EJS'],
    desc: "A site that is exclusive to member's only! This site is served solely by a back-end. The back end is express and provides the necessary html, css, and javascript for the site to funciton. Express uses EJS as the view to set up the HTML.",
    live: 'https://blooming-thicket-38738.herokuapp.com',
    source: 'https://www.github.com/Dependability/members-only',
    preview: membersonly
},{
    title: "TicTacToe with unbeatable AI",
    tech: ['CSS', 'Javascript', 'HTML'],
    desc: 'Simple Tic Tac Toe game, but the bot is unbeatable. The styling has much to be desired, but the bot is made using minimax algorithm (recursive algorithm). You can not win against the bot.',
    live: 'https://dependability.github.io/Tic-Tac-Toe',
    source: 'https://www.github.com/Dependability/Tic-Tac-Toe',
    preview: TicTacToe
},  ]
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
                        <a className='live' href={val.live} target='_blank'>Live <Icon path={mdiOpenInNew} size={1} /></a>
                        <a href={val.source} target='_blank'>Source <Icon path={mdiXml} size={1} /></a>
                    </div>
                    </div>
                    <div className='right'>
                        <img src={val.preview} alt={val.title}></img>
                    </div>
                 </div>)
        })}
    </div>
    </Layout>
}

export default Projects