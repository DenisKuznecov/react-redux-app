import React, { Component, PropTypes } from 'react';
import AdvancedInfo from './components/AdvancedInfo/AdvancedInfo';

import './user-block.css';

class UserBlock extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showAdvancedInfo: false
        };
    }

    static propTypes = {
        user: PropTypes.object.isRequired,
    };

    handleUserLocation(location) {
        const locationArr = [];
        if(location.street) locationArr.push(location.street);
        if(location.city) locationArr.push(location.city);
        if(location.state) locationArr.push(location.state);
        return locationArr.join(', ');
    }

    toggleAdvanced() {
        this.setState({
            showAdvancedInfo: !this.state.showAdvancedInfo
        });
    }

    render() {
        const { user } = this.props;
        const { showAdvancedInfo } = this.state;
        console.log(user);
        return (
            <div className="user-block-wrap">
                <img className="user-image" src={user.picture.medium} alt="user-picture"/>
                <div className="user-info">
                    <h4 className="user-name">
                        {`${user.name.first} ${user.name.last}`}
                    </h4>
                    <p className="user-username">
                        {user.login.username}
                    </p>
                    <p className="user-phone">
                        {user.phone}
                    </p>
                    <p className="user-state">
                        {user.location.state}
                    </p>
                </div>
                <div className="user-controls">
                    {
                        showAdvancedInfo ?
                            <i onClick={this.toggleAdvanced.bind(this)}>-</i> :
                            <i onClick={this.toggleAdvanced.bind(this)}>+</i>
                    }
                </div>
                {
                    showAdvancedInfo &&
                    <AdvancedInfo
                        user={user}
                    />
                }
            </div>
        );
    }
}

export default UserBlock;