import React, { Component } from 'react'
import './CSS/todo.css'

export class Form2 extends Component {
    state = {
        firstName: "",
        lastName: "",
        password: "",
        gender: "",
    }

    onChange = async (event) => {
        await this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>User Registration</h1>
                    <label>FirstName :</label> <input name='firstName' type="text" value={this.state.firstName} onChange={this.onChange} placeholder="FirstName..." /><br />
                    <label>LastName :</label> <input name='lastName' type="text" value={this.state.lastName} onChange={this.onChange} placeholder="LastName..." /><br />
                    <label>Password :</label> <input name='password' type="password" value={this.state.password} onChange={this.onChange} placeholder="Password..." /><br />
                    <label>Gender :</label><select name='gender' onChange={this.onChange} defaultValue="Select Gender">
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

//test

export default Form2
