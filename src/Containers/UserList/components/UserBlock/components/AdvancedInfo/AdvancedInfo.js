import React, { PropTypes } from 'react';
import moment from 'moment';

import './advanced-info.css';

const AdvancedInfo = props => {
    const { user } = props;
    return(
        <div className="advanced-info-wrap">
            <h3 className="advanced-name">{user.name.first}</h3>
            <img className="large-image" src={user.picture.large} alt="large"/>
            <div className="advanced-info">
                <div className="advanced-list-item">
                    <p className="info-list-item">
                        <span>Username:</span>
                        <span>{user.login.username}</span>
                    </p>
                    <p className="info-list-item">
                        <span>Registered:</span>
                        <span>{user.registered}</span>
                    </p>
                    <p className="info-list-item">
                        <span>Email:</span>
                        <span>{user.email}</span>
                    </p>
                </div>
                <div className="advanced-list-item">
                    <p className="info-list-item">
                        <span>Address:</span>
                        <span>{user.location.street}</span>
                    </p>
                    <p className="info-list-item">
                        <span>City:</span>
                        <span>{user.location.city}</span>
                    </p>
                    <p className="info-list-item">
                        <span>Post Code:</span>
                        <span>{user.location.postcode}</span>
                    </p>
                </div>
                <div className="advanced-list-item">
                    <p className="info-list-item">
                        <span>Birthday:</span>
                        <span>{moment(user.dob).format('DD/MM/YYYY')}</span>
                    </p>
                    <p className="info-list-item">
                        <span>Phone:</span>
                        <span>{user.phone}</span>
                    </p>
                    <p className="info-list-item">
                        <span>Cell:</span>
                        <span>{user.cell}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

AdvancedInfo.propTypes = {
    user: PropTypes.object.isRequired
};

export default AdvancedInfo;