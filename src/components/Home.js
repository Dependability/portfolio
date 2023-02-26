import Layout from './Layout';
import profile from '../assets/profile.JPG';
export default function Home() {

    return <Layout>
        <div className='home'> 
        <img className='pfp' src={profile} alt='pfp'></img>
        <p className='intro'>Hi, I am </p>
        <h1>Seyi Bakare</h1>
        <p className='short's>A full-stack developer that is currently attending college.
            I love to learn new things and apply them in any way possible.
        </p>
        </div>
    </Layout>
}