import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import UserBlock from '../UserBlock/UserBlock';

import './layout.css';

class Layout extends Component {

    componentWillMount() {
        const { dispatch } = this.props;
        debugger;
        dispatch({type: 'FETCHING_DATA', amount: 10});
        console.log(this.props.data);
    }

    render() {
        const { data } = this.props;

        return (
            <div className="page-wrapper">
                <Header/>
                <div className="content-wrap">
                    <table>
                        <thead>
                            <tr className="table-title">
                                <th></th>
                                <th>Last</th>
                                <th>First</th>
                                <th>Username</th>
                                <th>Phone</th>
                                <th>Location</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            data.map((user, idx) => {
                                return <UserBlock
                                    user={user}
                                    key={idx}
                                />;
                            })
                        }
                        </tbody>
                    </table>
                </div>
                {
                    this.props.error &&
                    <p>{this.props.error.message}</p>
                }
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
       data: state.layoutReducer.data,
       error: state.layoutReducer.error,
    };
}

export default connect(mapStateToProps)(Layout);
