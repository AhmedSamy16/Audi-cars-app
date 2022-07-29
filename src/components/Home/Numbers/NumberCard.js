
const NumberCard = (props) => {
    return (
        <article className='number__card'>
            <img src={props.img} alt="Description" className={props.title === 3.2 ? "seconds" : props.title === 205 ? "speed" : ""} />
            <div className="number__text">
                <h3>{props.title}</h3>
                <span>{props.secondary}</span>
            </div>
        </article>
    )
}

export default NumberCard