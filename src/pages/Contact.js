import { useDispatch, useSelector } from "../store";
import { selectEmail, selectName, selectMessage } from '../store/contact';
import { setName, setEmail, setMessage } from '../store/contact/actions';
import BaseButton from "../components/BaseButton";

const Contact = () => {

    const dispatch = useDispatch();
    const name = useSelector(selectName);
    const email = useSelector(selectEmail);
    const message = useSelector(selectMessage);

    return (
        <div>
            <form action="#">
                <p><input type="text" placeholder='nombre' onChange={(e) => dispatch(setName(e.target.value))} /></p>

                <p><input type="text" placeholder='email' onChange={(e) => dispatch(setEmail(e.target.value))} /></p>

                <p><input type="text" placeholder='message' onChange={(e) => dispatch(setMessage(e.target.value))} /></p>

                <BaseButton active={name.trim() !== '' && email.trim() !== '' && message.trim() !== ''} />
            </form>
        </div>
    );
}

export default Contact;
