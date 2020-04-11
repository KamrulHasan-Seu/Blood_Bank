import React, { Component } from 'react'
import userimage from '../images/user.png'

import userService from '../service/UserService';


const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
class UserDetails extends Component {

   constructor(props) {
       super(props)
   
       this.state = { 
        name: '',
        age:'',
        email:'',
        password:'', 
        address:'', 
        gender:'',
        bloodGroup:'',
        errors:{ 
        name: '', 
        age:'',
        email:'',
        password:'',
        address:'',
        gender:'',
        bloodGroup:''
        }
    }
   }
  

    
    handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(this.state);
        // userService.saveUser(this.state);
    }

    onChangeHandler=(event)=>{
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'name': 
              errors.name = 
                value.length < 5
                  ? 'Name must be 5 characters long!'
                  : '';
              break;
              case 'age': 
              errors.age = 
                value.length < 2
                  ? 'Age must be 2 characters long!'
                  : '';
              break;
            case 'email': 
              errors.email = 
                validEmailRegex.test(value)
                  ? ''
                  : 'Email is not valid!';
              break;
              case 'password': 
              errors.password = 
                value.length < 4
                  ? 'Password must be 4 characters long!'
                  : '';
              break;
              case 'address': 
              errors.name = 
                value.length < 5
                  ? 'Address must be 5 characters long!'
                  : '';
              break;
            
            default:
              break;
          }
          this.setState({errors, [name]: value}, ()=> {
            console.log(errors)
        })
      
    }

     
    render() {
        const {errors} = this.state;
        return (
            <div className="user-det container">
            <div className="full-form">
                <div className="user-image">
                    <img src={userimage} alt=""/>
                </div>
            <form action="" onSubmit={this.handleSubmit}>
                
                <div className="row">
                <div className="single-field col-12">
                    <label className="col-6">Name :</label>
                    <input className="col-6" type="text" placeholder="Enter Name" name="name" onChange={this.onChangeHandler} required/>  
                    {errors.name.length > 0 && <span className='error'>{errors.name}</span>}
                </div>
        
                <div className="single-field col-12">
                    <label className="col-6">Age :</label>
                    <input className="col-6" type="text" placeholder="Enter Age" name="age" onChange={this.onChangeHandler} required/>
                </div>
                <div className="single-field col-12">
                    <label className="col-6">Email :</label>
                    <input className="col-6" type="text" placeholder="Enter Email" name="email" onChange={this.onChangeHandler} required/>
                </div>
                <div className="single-field col-12">
                    <label className="col-6">Password :</label>
                    <input className="col-6" type="password" placeholder="Enter Password" name="password" onChange={this.onChangeHandler} required/>
                </div>
                <div className="single-field col-12">
                    <label className="col-6">Address :</label>
                    <input className="col-6"type="text" placeholder="Enter Address" name="address" onChange={this.onChangeHandler} required/>
                </div>
                <div className="single-field col-12">
                    <label className="col-6">Gender :</label>
                    <select className="col-6" name="gender" id="" onChange={this.onChangeHandler} value={this.state.gender} required>
                    <option value="">Select Your Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div className="single-field col-12">
                    <label className="col-6">Blood Group :</label>
                   <select className="col-6" name="bloodGroup" id="" onChange={this.onChangeHandler} value={this.state.bloodGroup}required>
                   <option value="">Select Your Blood-Group</option>
                       <option value="A+">A+</option>
                       <option value="A-">A-</option>
                       <option value="A">A</option>
                       <option value="B+">B+</option>
                       <option value="B-">B-</option>
                       <option value="O+">O+</option>
                       <option value="O-">O-</option>
                       <option value="AB+">AB+</option>
                       <option value="AB-">AB-</option>
                   </select>
                </div>
                </div>
                <button className='col-12' onSubmit={this.handleSubmit}>Submit</button>
                </form>
            </div>
            </div>
            
        )
    }
}

export default UserDetails

