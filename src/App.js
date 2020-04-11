import React, { Component } from 'react';
import './App.css';
import SignInForm from './components/SignInForm';
import AllComponents from './components/AllComponents';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {PrivateRoute} from './util/PrivateRoute';

export class App extends Component {

    state = {
      isLogin : true
    }

  logInHandler = (value) => {
    if (value.username === 'admin' && value.password === 'fds') {
      this.setState({
        isLogin:true
      })
      console.log('correct')
    }
    else {
      alert('UserName and Password Do not Match')
    }
  }

  render() {
    return <BrowserRouter>
       <Switch>
         <Route exact path="/login" component={() => <SignInForm isLogin={this.state.isLogin} logInHandler={this.logInHandler} handleUserPassChange={this.handleUserPassChange}/>}/>
         <div className='test'>
          <PrivateRoute isLogin={this.state.isLogin} path="/" component={AllComponents}/>
         </div>
       </Switch>
    </BrowserRouter>
  }
}

export default App
