import React, { PropTypes } from 'react';

import './advanced-info.css';

const AdvancedInfo = props => {
    const { user } = props;
    return(
        <div className="advanced-info-wrap">
            <p>{user.name.first}</p>
            <img src={user.picture.large} alt="large"/>
        </div>
    );
};

AdvancedInfo.propTypes = {
    user: PropTypes.object.isRequired
};

export default AdvancedInfo;