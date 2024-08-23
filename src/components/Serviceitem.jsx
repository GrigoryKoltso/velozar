import React from 'react';

const Serviceitem = ({title, colorOfItem}) => {
    return (
        <div className='serviceItem' style={{backgroundColor: colorOfItem}}>
            <div className='line_div'></div>
            <h3 className='serviceItemTitle'>{title.split(' ')[0]}<br />{title.split(' ')[1]}</h3>
        </div>
    );
};

export default Serviceitem;