import React, { Component } from 'react';
import withLogged from '../hoc/withLogged';
import { getAuth } from '../services/calls';

class User extends Component {
  componentDidMount = () => this.getAuthCall();

  getAuthCall = async () => {
    const { getAuthPage } = this.props;
    await getAuthPage(getAuth);
  };

  render() {
    const { isLogged } = this.props;
    const userLogged = <div>You're logged.</div>;
    const userNotLogged = <div>You're NOT logged.</div>;
    return <div>{isLogged ? userLogged : userNotLogged}</div>;
  }
}

export default withLogged(User);
