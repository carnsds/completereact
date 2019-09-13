import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.style.scss';

const MenuItem = ({ title, imageUrl, size, history, linkedUrl, match }) => (
    <div 
        className={`${size} menu-item`} 
        onClick={() => history.push(`${match.url}${linkedUrl}`)}
        >
        <div 
            className='background-image'
            style= {{backgroundImage: `url(${imageUrl})`}}
            />
            <div className='content'>
                <div className='title'>{title.toUpperCase()}</div>
                <span className='subtitle'>SHOP NOW</span>
            </div>
    </div>
)

export default withRouter(MenuItem);
