import React, { Component } from 'react';
import { postAuth } from '../services/calls';

export default class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  onChangeInput = (inputName, { target: { value } }) => {
    this.setState({ [inputName]: value });
  };

  onClickValidate = async () => {
    const { username, password } = this.state;
    const { token } = await postAuth(username, password);
    localStorage.setItem('token', token);
  };

  render() {
    return (
      <div>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          onChange={this.onChangeInput.bind(null, 'username')}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={this.onChangeInput.bind(null, 'password')}
        />
        <button onClick={this.onClickValidate}>Validate</button>
      </div>
    );
  }
}
