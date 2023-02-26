import { useNavigate } from "react-router-dom"
import Icon from "@mdi/react";
import { useState } from "react";
import { mdiClose, mdiMenu } from "@mdi/js";
function Header() {
    const navigate = useNavigate();
    const [showMenu, setMenu] = useState(false);
    return <header>
        <div className="inner">
        <h2 className='title' onClick={()=> {navigate(process.env.PUBLIC_URL + '/')}}>Seyi</h2>
        <div className='right'>
            <a href={process.env.PUBLIC_URL + '/'}>Home</a>
            <a href={process.env.PUBLIC_URL + '/about'}>About</a>
            <a href={process.env.PUBLIC_URL + '/projects'}>Projects</a>
            <a href={process.env.PUBLIC_URL + '/'}>Resume</a>
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
                <a href={process.env.PUBLIC_URL + '/'} onClick={()=>{setMenu(false)}}>Home</a>
                <a href={process.env.PUBLIC_URL + '/about'} onClick={()=>{setMenu(false)}}>About</a>
                <a href={process.env.PUBLIC_URL + '/projects'} onClick={()=>{setMenu(false)}}>Projects</a>
                <a href={process.env.PUBLIC_URL + '/'} onClick={()=>{setMenu(false)}}>Resume</a>
                <div className='line'></div>
            </div>
        </div> : ''}

        </div>
    </header>
}

export default Header