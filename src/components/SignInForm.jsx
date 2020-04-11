import React, { Component } from 'react';
import signImage from '../images/img-01.png';
import { Redirect } from 'react-router-dom';

class SignInForm extends Component {

    state = {
        username: '',
        password: ''
      }

    handleUserPassChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

    render() {

        if (this.props.isLogin) return <Redirect to="/home" />;

        return (
            <div className="sign-in">
                <div className="container ">
                   <div className="sign-in-container">
                   <div className="row full-form col-12">
                        <div className="left-div col-6 " >

                            <img src={signImage} alt="" />
                        </div>
                        <div className="right-div col-6">
                            <h3>User Login</h3>
                            <input type="text" onChange={this.handleUserPassChange} name="username" placeholder="User Name" value={this.state.username} />
                            <input type="password" onChange={this.handleUserPassChange} name="password" placeholder="Password" value={this.state.password} />
                            <button onClick={() => this.props.logInHandler(this.state)}>Log-In</button>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
        )
    }
}

export default SignInForm;
