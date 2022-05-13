import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Post from '../pages/Post';
import Autor from '../pages/Autor';
import Layout from '../components/Layout';


const RoutesConfig = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/post/:id" element={<Post />} />
                <Route path="/autor" element={<Autor />} />
                <Route path="*" element={<div>404</div>} />
            </Route>

        </Routes>
    </BrowserRouter>
);

export default RoutesConfig;