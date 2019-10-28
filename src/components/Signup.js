import React, { Component } from 'react'
import * as request from 'superagent'
import {url} from '../constants'



export default class Signup extends Component {
   state = {
       username: "",
       password: ""
   }
   onChangeUsername = (event) => {
       console.log("change username")
       this.setState({
           username: event.target.value
       })
   }
   onChangePassword = (event) => {
       console.log("change password")
       this.setState({
           password: event.target.value
       })
   }
   onSubmit = (event) => {
       event.preventDefault()
       console.log("try to login w: ", this.state.username ,"and", this.state.password)
       request.post(`${url}/home`)
       .send({
           email: this.state.username,
           password: this.state.password
       })
       .catch(err => console.log(err))
   }
   render() {
       return (
           <div>
              <form onSubmit={this.onSubmit}>
              <input
              name= "username"
              type= "text"
              onChange={this.onChangeUsername}
              value={this.state.username}
              placeholder="username"
              ></input>
              <input
              name= "password"
              type= "password"
              onChange={this.onChangePassword}
              value={this.state.password}
              placeholder="password"
              ></input>
              <button type="submit"> Signup</button>
              </form>
           </div>
       )
   }
} 