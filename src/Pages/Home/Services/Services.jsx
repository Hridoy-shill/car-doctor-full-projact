import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='mt-20'>
            <div className='text-center'>
                <p className='text-xl text-orange-600 font-bold'>Service</p>
                <p className='text-5xl font-bold my-4'>Our Service Area</p>
                <p className='text-lg font-semibold text-gray-400'>the majority have suffered alteration in some form, by injected humour, or randomised <br />
                    words which don't look even slightly believable.</p>
            </div>

            <div className='grid grid-cols-3 gap-6 mt-10'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;