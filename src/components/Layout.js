import Header from './Header';
import Footer from './Footer';
import '../styles/style.css';

function Layout (props) {

    return <div>
        <Header />
        {props.children}
        <Footer />
    </div>
}

export default Layout;