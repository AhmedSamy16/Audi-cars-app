

const FeatureCard = (props) => {
    return (
        <article className='feature__card'>
            <div className="icon">
                <img src={props.icon} alt={props.title} className="feature__img" />
            </div>
            <div className="card__text">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </article>
    )
}

export default FeatureCard