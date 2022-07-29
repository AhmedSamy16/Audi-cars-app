
const DetailsCard = (props) => {
    return (
        <article>
            <div className='details__icon'>
                <img src={props.icon} alt="main icon" />
            </div>
            <div className='card__text'>
                <h3>{props.title}</h3>
                <small>{props.text}</small>
            </div>
        </article>
    )
}

export default DetailsCard