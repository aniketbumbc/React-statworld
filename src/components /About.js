import React, { Component } from 'react';
import Contact from './Contact';

class About extends Component {
      constructor() {
            super()
            this.state = {
                  name: '',
                  age: '',
                  gender: ''
            }

            this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleSubmit(event) {
            event.preventDefault();
            this.setState({
                  name: event.target.username.value,
                  age: this.age.value,
                  gender: event.target.gender.value,
            })
            event.target.username.value = ' '
            this.age.value = 'Select Value';
            event.target.gender.value = 'default';
      }
      render() {
            console.log(this.state);
            return (
                  <div>
                        <h1>Welcome Student Registration  </h1>
                        <form onSubmit={this.handleSubmit}>
                              <label> Enter Name </label>
                              <input type='text' name="username" />
                              <br />
                              <br />
                              <br />
                              <label> Select Age </label>
                              <select ref={(input) => this.age = input}>
                                    <option value="Select Value"> Select Value </option>
                                    <option value="30"> 30</option>
                                    <option value="40">40</option>
                                    <option value="50"> 50</option>
                                    <option value="60">60</option>
                              </select>
                              <br />
                              <br />
                              <br />
                              <br />
                              <label>Gender</label>
                              Male <input type="radio" name="gender" value="Male" />
                              Female <input type="radio" name="gender" value="Female" />

                              <br />
                              <br />
                              <br />
                              <br />
                              <input type="submit" value="Submit" />
                        </form> 
                        <Contact data={this.state} />                      
                  </div>
            )
      }


}




export default About;