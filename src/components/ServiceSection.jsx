import React from 'react';
import Serviceitem from './Serviceitem';

const ServiceSection = () => {
    return (
        <section className='serviceSection'>
            <Serviceitem title='Годовое ТО' colorOfItem={'#22356F'}/>
            <Serviceitem title='Выравнивание колес' colorOfItem={'#0052C1'}/>
            <Serviceitem title='Настройка переключателей' colorOfItem={'#76B58B'}/>
        </section>
    );
};

export default ServiceSection;
