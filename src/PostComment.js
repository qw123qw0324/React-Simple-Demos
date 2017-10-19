import React, {Component} from 'react';
import './PostComment.css'
import {Button, Input, Icon, Rate, Avatar} from 'antd'

export default class PostComment extends Component{
    constructor(props){
        super(props)
        this.state = {NameInput:'', CommentInput: '', Clicked: false, value: 3}
    }

    i = -1
    list = []

    PostName = (text) => {
        this.setState({NameInput: text.target.value})

    }

    PostComment = (text) => {
        this.setState({CommentInput: text.target.value})
    }

    Post = () => {
        var name = this.state.NameInput
        var comment = this.state.CommentInput




        if (name.length&&comment.length != 0){
            this.props.items.push({name:name, Comment: comment})
            this.setState({NameInput: ''})
            this.setState({CommentInput: ''})
            this.list.push(this.state.value)
            this.i += 1

            console.log(this.list[this.i])
        }


    }

    rateOnChange = (value) => {
        this.setState({value: value})

    }




    render(){

        let Comments = this.props.items

        var List = this.list

        return(
            <div style={{display:'flex', flexDirection: 'column',justifyContent:'flex-start'}}>
                <img
                    src='https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg'
                    style={{width:300, borderRadius: 300}}/>
                <div style = {{width: 300, textAlign:'center'}}>
                    <Rate onChange={this.rateOnChange} value={this.state.value}/>
                    <p>{this.state.value} Stars</p>
                </div>

                <div style={{display:'flex', flexDirection: 'column',justifyContent:'flex-start', width:300}}>
                    <h2 style={{margin: 9, paddingBottom:5, borderBottomStyle:'solid', borderBottomWidth:1, borderBottomColor:'#E1E1E1'}}>评论</h2>
                    <ul style={{listStyle:'none', paddingLeft:10,margin:0}}>
                        {Comments.map((c) => {
                            return(<li style={{padding: 5, borderBottomStyle:'solid', borderBottomWidth:1, borderBottomColor:'#E1E1E1', marginBottom:9, fontSize:15}}>
                                    <Avatar icon="user" size="small" /><br/><span style={{color:'#346CB5'}}>{c.name}</span>: {c.Comment} <p><Rate disabled count={List[this.i]}  value={List[this.i]} style={{fontSize:7}}/></p></li>

                            )
                        })}
                    </ul>


                </div>

                <div style={{marginTop:20}}>

                    <Input style={{width:200, marginBottom:5}}  prefix={<Icon type="user" />} onChange={this.PostName} placeholder='昵称'/> <br/>

                    <Input style={{width:200, marginBottom:5}}  prefix={<Icon type="edit" />} onChange={this.PostComment} placeholder='评论'/> <br/>

                    <Button icon='upload' type="primary" style={{borderRadius: 10}} onClick={this.Post}>提交评论</Button>
                </div>


            </div>
        )

    }

}