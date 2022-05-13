import { useParams } from "react-router-dom";
import { useSelector } from "../store";
import { selectPosts } from '../store/post';

const Post = () => {
    const posts = useSelector(selectPosts);
    console.log('posts', posts)
    const { id } = useParams();

    const post = posts.find(p => p.id === parseInt(id));
    console.log(id, 'poooooooooooooost', post);
    return (<div>

        <h1>{post.title}</h1>

        <p>{post.body}</p>
    </div>
    )
}

export default Post;