import React from 'react';

const RentalSection = ({imageSrc, title, description}) => {
    return (
        <section className='rental_section'>
            <img src={imageSrc} alt="bicycle" />
            <div className='rentalSectionDescripton'>
                <h3 className='rentalInfo'>{title}</h3>
                <p className='rentalInfo'>{description}</p>
            </div>
        </section>
    );
};

export default RentalSection;