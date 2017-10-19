import React, { Component } from 'react';
import './ServiceChooser.css'

export default class Service extends Component{

    constructor(props){
        super(props)
        this.state = {active:false}
    }

   //if use arrow function handleClick=()=>, then we dont need to bind(this)
    handleClick(){


        var active = !this.state.active

        this.setState({active:active})

        this.props.addTotal(active? this.props.price:-this.props.price)


    }

    render(){
        return(
            <div className='service'>
                <p className={this.state.active? 'active':''} onClick={this.handleClick.bind(this)}> {this.props.name} <b>{this.props.price}</b> </p>


            </div>

        )

    }


}