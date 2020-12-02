import React , { Component } from 'react';

class Title  extends Component {

    constructor(props){
        super(props)

        this.number=0

    }
    counter(){

        this.number = this.number+1;
        console.log(this.number)
    }
render(){

    return(
        <div>
           <p> { this.number} </p>
           
           <button onClick={ () => this.counter()}> Click Me </button>

        </div>
    )
}

}
export default Title