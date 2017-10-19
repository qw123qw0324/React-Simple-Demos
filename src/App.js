import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

    state = {focused:0}

    clicked(index){
        this.setState({focused:index})
        console.log(this.state.focused)
    }

    render() {

      return (
          <div className="App">
              <ul>{this.props.items.map((item, index) => {

                    var style = '';

                    if (this.state.focused === index){
                      style = 'focused';
                    }

                  return(<li className={style} onClick={this.clicked.bind(this, index)} key={index}> {item} </li>)
                  }

              )}

              </ul>

              <p>Select: {this.props.items[this.state.focused]}</p>

          </div>


      );
  }
}

