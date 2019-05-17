import React, { Component } from 'react';

const withLogged = WrappedComponent => {
  return class extends Component {
    state = {
      isLogged: false,
    };

    componentDidMount = () => {
      localStorage.getItem('token')
        ? this.setState({ isLogged: true })
        : this.setState({ isLogged: false }, this.props.history.push('/login'));
    };

    getAuthPage = async (...req) => {
      const [myFunction, ...parameters] = req;
      try {
        const { data, status } = await myFunction(...parameters);
      } catch (e) {
        console.error(e);
        this.props.history.push('/login');
      }
    };

    render() {
      const { isLogged, requestFunction } = this.state;
      return (
        <WrappedComponent
          {...this.props}
          isLogged={isLogged}
          getAuthPage={this.getAuthPage}
        />
      );
    }
  };
};

export default withLogged;
