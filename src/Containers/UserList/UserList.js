import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserBlock from './components/UserBlock/UserBlock';
import Loader from '../../components/Loader/Loader';

import './user-list.css';

class UserList extends Component {
    componentWillMount() {
        const { dispatch } = this.props;
        dispatch({type: 'FETCHING_DATA', amount: 10});
    }

    render() {
        const { data, isFetching } = this.props;
        if(isFetching) return <Loader/>;
        else if(data && data.length) {
            return (
                <div className="user-list-wrap">
                    {
                        data.map((user, idx) => {
                            return <UserBlock
                                user={user}
                                key={idx}
                            />;
                        })
                    }
                </div>
            );
        }
        return null;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.layoutReducer.data,
        error: state.layoutReducer.error,
        isFetching: state.layoutReducer.isFetching,
    };
};

export default connect(mapStateToProps)(UserList);