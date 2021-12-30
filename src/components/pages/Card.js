import React from 'react';
import "./Card.css";

const Card = ({Data}) => {
    return (
        <div>
            {
                Data.map((item) => {
                    return <div key={item.id} className="card shadow-lg d-inline-flex m-4 hover-element" style={{ width: '18rem' }}>
                        <img src={item.imgSrc} className="card-img-top" alt={item.name} />
                        <div className="card-body text-start">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.about}</p>
                        </div>

                    </div> 


                })
            }
        </div>
    )
}

export default Card
