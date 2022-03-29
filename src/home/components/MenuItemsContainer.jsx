import React from 'react';
import './menuItemsContainer.styles.scss';

const MenuItemsContainer = ({title, subTitle="Sub Title", imageUrl, size}) => {
    return(      
        <div className={`${size} menuItem`} > 
            <div
            className='backgroundImage'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div> 
    )
}

export default MenuItemsContainer;