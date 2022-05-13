import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';
import corazon from '../assets/img/corazon.png';

const Layout = () => (
    <div>
        <div className='navbar'>
            <img src={corazon} alt="" className='logo' />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/autor">Autor</Link></li>
            </ul>
        </div>
        <Outlet />

        <Footer />
    </div>
)

export default Layout;