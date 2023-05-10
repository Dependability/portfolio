import { Link, useNavigate } from "react-router-dom"
import Icon from "@mdi/react";
import { useState } from "react";
import { mdiClose, mdiMenu } from "@mdi/js";
function Header() {
    const navigate = useNavigate();
    const [showMenu, setMenu] = useState(false);
    return <header>
        <div className="inner">
        <h2 className='title' onClick={()=> {navigate('/')}}>Seyi</h2>
        <div className='right'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/'>Resume</Link>
        </div>
        <div className='menu' onClick={() => {
            setMenu(val => !val);
        }}>
            <Icon path={mdiMenu} size={1} />
        </div>
        {showMenu ? <div className='navMenuOverlay' onClick={(e) => {
            setMenu(false);
            console.log('ok')
        }}>
            <div className='menuInner' onClick={(e) => {e.stopPropagation()}}>
                <Icon path={mdiClose} size={1} onClick={()=> {setMenu(false)}}></Icon>
                <Link to='/' onClick={()=>{setMenu(false)}}>Home</Link>
                <Link to='/about' onClick={()=>{setMenu(false)}}>About</Link>
                <Link to='/projects' onClick={()=>{setMenu(false)}}>Projects</Link>
                <Link to='/' onClick={()=>{setMenu(false)}}>Resume</Link>
                <div className='line'></div>
            </div>
        </div> : ''}

        </div>
    </header>
}

export default Header