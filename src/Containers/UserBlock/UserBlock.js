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
        return (
            <tr className="user-wrap">
                {
                    user.picture &&
                    <td className="user-info user-image">
                        <img src={user.picture.thumbnail} alt="user"/>
                    </td>
                }
                <td className="user-info user-last-name">{user.name.last}</td>
                <td className="user-info user-first-name">{user.name.first}</td>
                {
                    user.login.username &&
                    <td className="user-info username">{user.login.username}</td>
                }
                {
                    user.phone &&
                    <td className="user-info user-phone">{user.phone}</td>
                }
                {
                    user.location &&
                    <td className="user-info user-lacation">
                        {this.handleUserLocation(user.location)}
                    </td>
                }
                <td className="user-info plus-icon">
                    {
                        this.state.showAdvancedInfo ?
                            <i onClick={this.toggleAdvanced.bind(this)}>-</i> :
                            <i onClick={this.toggleAdvanced.bind(this)}>+</i>
                    }
                </td>
                {
                    this.state.showAdvancedInfo &&
                    <AdvancedInfo
                        user={user}
                    />
                }
            </tr>
        );
    }
}

export default UserBlock;