import { mdiOpenInNew, mdiXml } from "@mdi/js";
import Icon from "@mdi/react";
import Layout from "./Layout";
import battleship from '../assets/previews/battleship.png';
import myTube from '../assets/previews/myTube.png';
import Knight from '../assets/previews/Knight-Travails.png';
import TicTacToe from '../assets/previews/Tic-Tac-Toe.png';
import waldo from '../assets/previews/waldo.png';
const projectList = [{
    title: "MyTube",
    tech: ['React', 'Firebase', 'CSS', 'Javascript'],
    desc: 'A youtube clone that is capable of viewing videos uploaded by users, uploading videos, user authentication, commenting and liking, subscribing, and more. Database is hosted on Firebase.',
    live: 'https://dependability.github.io/myTube',
    source: 'https://github.com/Dependability/myTube',
    preview: myTube
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
    title: "TicTacToe with unbeatable AI",
    tech: ['CSS', 'Javascript', 'HTML'],
    desc: 'Simple Tic Tac Toe game, but the bot is unbeatable. The styling has much to be desired, but the bot is made using minimax algorithm (recursive algorithm). You can not win against the bot.',
    live: 'https://dependability.github.io/Tic-Tac-Toe',
    source: 'https://www.github.com/Dependability/Tic-Tac-Toe',
    preview: TicTacToe
},{
    title: "Where's Waldo",
    tech: ['React', 'Firebase', 'CSS', 'Javascript'],
    desc: 'A game where you must find "Waldo". This is based off the books and puzzles, "Where\'s waldo". Features include a leaderboard system and database that is hosted on Firebase',
    live: 'https://dependability.github.io/wheres-waldo',
    source: 'https://www.github.com/Dependability/wheres-waldo',
    preview: waldo
},{
    title: "Unknown",
    tech: ['Node.js', 'Express.js', 'Firebase', 'CSS', 'Javascript'],
    desc: 'Unknown desc',
    live: 'https://www.youtube.com',
    source: 'https://www.github.com',
    preview: waldo
} ]
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