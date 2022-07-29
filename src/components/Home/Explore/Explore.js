import "./explore.css"

const Explore = () => {
    return (
        <section className='explore'>
            <div className='container'>
                <div className='explore__content'>
                    <div className='first'>
                        <h3>2018 R8 Overview</h3>
                        <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small>
                        <a className='link' href="https://www.audi.com/en.html" target="_blank" rel="noreferrer">Explore</a>
                    </div>
                    <div className='second'>
                        <h3>2018 R8 Design</h3>
                        <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small>
                        <a href="https://www.audi.com/en.html" target="_blank" className='link' rel="noreferrer">Explore</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Explore