import React from 'react'
import "./overview.css"

const Overview = ({ title, header, small, text, style }) => {
    return (
        <section className='sedan_overview' style={style}>
            <div className='container'>
                <div className='overview_sedan_text'>
                    <p className='overview_sedan_title'>{title}</p>
                    <h2>{header}</h2>
                    {small && <small className='sedan_price'>{small}</small>}
                    <p className='overview_sedan_info'>
                        {text}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Overview