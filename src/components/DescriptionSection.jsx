import React from 'react';

const DescriptionSection = ({descriptionOne, descriptionTwo}) => {
    return (
        <section className='descriptionSection container'>
            <p className='descriptionOne'>{descriptionOne}</p>
            <p>{descriptionTwo}</p>
        </section>
    );
};

export default DescriptionSection;