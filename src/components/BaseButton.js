const BaseButton = ({ active }) => {

    return (
        <button disabled={!active ? true : false}>Enviar</button>
    )
}

export default BaseButton;