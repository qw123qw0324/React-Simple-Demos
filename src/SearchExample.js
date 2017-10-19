import React, {Component} from 'react';
import './SearchExample.css'

export default class SearchExample extends Component {

    state = {searchString: ''}

    handleChange = (text) =>{
        this.setState({searchString: text.target.value})
        //console.log(text)
    }

    render(){
        var libraries = this.props.items

        var searchString_Low = this.state.searchString.trim().toLowerCase()

        //console.log(searchString_Low)

        if (searchString_Low.length > 0){
            libraries = libraries.filter((i) => {
                //console.log(i.name.toLowerCase().match(searchString_Low))
                return (i.name.toLowerCase().match(searchString_Low));

            })
        }


        return(
            <div>
                <input type='text' value={this.state.searchString}  onChange={this.handleChange} placeholder='Search'></input>

                <ul>
                    {libraries.map((i, index) => {
                        return <li key={index}> {i.name} <a href={i.url}>{i.url}</a></li>
                    })}
                </ul>


            </div>



        );
    }
}