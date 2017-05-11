import React from 'react';

import iconBag from '../../../assets/img/icon-bag.svg';

const HeaderBucket = () => {
    return (
        <div>
            <img alt="Bag" src={iconBag}/>
            <span>2</span>
        </div>
    )
}

export default HeaderBucket;