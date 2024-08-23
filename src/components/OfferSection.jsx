import React from 'react';

const OfferSection = ({title, description, imageSrc}) => {
    return (
        <section className='offerSection'>
          <div className='container grid_wrapper'>
                <div className='offerInfoSection'>
                    <h2 className='offerTitle'>{title}</h2>
                    <p className='offerDescription'>{description}</p>
                </div>
                <img className='bicycleImg' style={{width:'520px', height: '604px'}} src={imageSrc} alt="bicycle" />
          </div>
        </section>
    );
};

export default OfferSection;