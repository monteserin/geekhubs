import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../app/api';
import { useDispatch, useSelector } from "../store";
import { selectPosts } from '../store/post';
import { setPosts } from '../store/post/actions';

const Home = () => {

    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);

    useEffect(() => {
        const getP = async () => {
            const data = await getPosts();
            dispatch(setPosts(data.data));
        }
        getP();
    }, [])

    return (
        <div>
            {
                posts.map(post => <p><Link to={`/post/${post.id}`}>{post.title}</Link></p>)
            }
        </div>
    );
}

export default Home;
