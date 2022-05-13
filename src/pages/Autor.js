import alumnaReact from '../assets/img/alumna-react.jpg';
import video from '../assets/video/acando-con-problemas-de-react.mp4';

const Autor = () => {

    return (
        <div>
            <h2>Alumna agradecida por haber aprendido React por arte de magia</h2>
            <img src={alumnaReact} alt="" />

            <h2>Acabando con problemas de programación con las manos desnudas</h2>

            <video controls src={video}></video>
        </div>
    )
}

export default Autor;