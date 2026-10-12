import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'

function NewsCard({ image, title, source, url, time }) {

    const {state} = useContext(ThemeContext);

    return (
        <>
            <div className='col mb-3 d-flex justify-content-center'>
                <div className="card p-2 shadow"  style={{backgroundColor : state.theme == 'light' ? '#282B4A' : "#EEEBDA" , width: "18rem" , color : state.theme == 'light' ? '#EEEBDA' : "#282b4a" }}>
                    <span className=" rounded-4 px-2 py-1 mb-2 fs-6" >{source}</span>
                    <img src={image} style={{ height: "200px" }} className="card-img-top border p-1 fs-6" alt={source} />
                    <div className="">    
                        <h6 className="card-title mt-3" >{title}</h6>

                        <Link to={url} target='_blank' className="btn mt-2" style={{color : state.theme == 'light' ? '#282b4a' : "#eeebda" , backgroundColor : state.theme == 'light' ? '#eeebda' : "#282b4a" }} >read more</Link>
                    
                        <p className='mt-3' >{time}</p>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsCard
