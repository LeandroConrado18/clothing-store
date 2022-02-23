import React from 'react';
import './directoryMenu.styles.scss';
import MenuItemsContainer from './MenuItemsContainer';

const sections = [
    {
        title: 'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id: 1
    },
    {
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id: 2
    },
    {
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        id: 3
    },
    {
        title: 'womens',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id: 4
    },
    {
        title: 'mens',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large',
        id: 5
    },
];


const DirectoryMenu = () => {

    return(
        <div className='directoryMenu'>
            {sections.map(section => <MenuItemsContainer key={section.id} title={section.title} imageUrl={section.imageUrl} size={section.size} />)}
        </div>
    )
}

export default DirectoryMenu;