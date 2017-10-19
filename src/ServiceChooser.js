import React, { Component } from 'react';
import Service from './Service'
import './ServiceChooser.css'



export default class ServiceChooser extends Component {

    state = {total:0}

    addTotal = (price) => {
        this.setState({total: this.state.total + price})

    }



    render(){
        var service = this.props.items.map((i) => {
            return <Service name={i.name} price={i.price} addTotal={this.addTotal}/>
        })


        return(
            <div className='ServiceChooser'>
                <h1>Our Service</h1>

                <div>
                    {service}

                </div>
                <p>Total: <b>{this.state.total}</b></p>


            </div>
        )

    }



}





