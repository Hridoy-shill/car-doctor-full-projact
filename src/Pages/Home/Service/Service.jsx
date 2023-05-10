import React from 'react';

const Service = ({ service }) => {
    console.log(service);
    const { _id, service_id, title, img, price, description } = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <img src={img} alt="Shoes" className='h-60'/>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-between items-center">
                    <p className='font-bold text-lg text-orange-600'>Price : ${price}</p>
                    <button className="btn btn-primary">➡</button>
                </div>
            </div>
        </div>
    );
};

export default Service;