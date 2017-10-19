import React, {Component} from 'react'
import './SearchPeople.css'

export default class SearchPeople extends Component{
    constructor(props){
        super(props)
        this.state = {searchInput: '', name: '', age: '', clicked: false, afterDelete: this.props.items }
    }


    addPeople = () => {

        if (this.state.name&&this.state.age != ''){
            if(parseInt(this.state.age)%1 ==0){
                this.props.items.push({name:this.state.name, age:this.state.age})
                console.log(this.state.name)

                this.setState({clicked:!this.state.clicked})

                console.log(this.state.clicked)
            }else{
                alert('Please input your true age')
            }

        }else{
            alert('Missing name or age')
        }


    }





    render(){
        var Libraries = this.state.afterDelete
        var Input_Low = this.state.searchInput.trim().toLowerCase()

        if(Input_Low.length > 0){
            Libraries = Libraries.filter((i) => {
                return(i.name.toLowerCase().match(Input_Low))
            })
        }



        return(
            <div >
                <h2>Search People:</h2>
                <input onChange={(text) => {this.setState({searchInput: text.target.value})}} />
                <ul>
                    {Libraries.map((i)=>{


                        return(<li>{i.name} {i.age} </li>)
                    })}

                </ul>

                <text/>

                <h2>Add People:</h2>

                <span>Name: </span><input  onChange={(text) => {this.setState({name: text.target.value})}}/> <br/>
                <span>Age: </span><input  onChange={(text) => {this.setState({age: text.target.value})}}/> <br/>
                <button  onClick={this.addPeople}>Add</button>

            </div>
        )

    }
}