import React, {Component} from 'react';
import './PictureList.css'


export default class PictureList extends Component{
    state = {pictures: this.props.items, favorites:[]}


    ClickPictures = (id) => {

        var favorites = this.state.favorites
        var pictures = this.state.pictures

        for(var i=0;i<pictures.length;i++){
            if(pictures[i].id == id){
                if(pictures[i].favorite){
                    this.ClickFavorite(id)
                }else{
                    favorites.push(pictures[i])
                    pictures[i].favorite = true
                }


                break
            }
        }

        this.setState({pictures: pictures, favorites: favorites});

    }

    ClickFavorite = (id) => {
        var favorites = this.state.favorites
        var pictures = this.state.pictures

        for(var i = 0; i < favorites.length; i++){
            if(favorites[i].id == id) break;
        }

        // Remove the picture from favorites array
        favorites.splice(i, 1);

        for(var i=0;i<pictures.length;i++){
            if(pictures[i].id == id){
                pictures[i].favorite = false
            }
        }

        this.setState({pictures: pictures, favorites: favorites});

    }


    render(){

        var myObject = {a:1, b:2, c:3, d:()=>{}}

        console.log(Object.values(myObject))



        var pictures = this.state.pictures.map((p)=>{
            return<Pictures id={p.id} src={p.src} title={p.title} clickHandle={this.ClickPictures}/>
        })

        var favorites = this.state.favorites.map((f)=>{
            return<Pictures id={f.id} src={f.src} title={f.title} clickHandle={this.ClickFavorite}/>
        })


        return(
            <div>
                <h1>Pictures: </h1>
                <div className="pictures" >{pictures}</div>

                <h1>Favorite: </h1>
                <div className='favorites'>{favorites}</div>

            </div>
        )
    }

}


class Pictures extends Component{

    handleClick=()=>{

        this.props.clickHandle(this.props.id)
        //let { A, ...B } = { A: 1, B: 2, C: 3 }

        //console.log(A)
        //console.log(B)
        //console.log(A, B)

    }



    render(){

        var cls = 'picture' + (this.props.favorite? 'favorite':'')



        return(
            <div onClick={this.handleClick} className={cls}>
                <img id={this.props.id} src={this.props.src} width='200' title={this.props.title} style={{width:250,height:200}}/>
            </div>
        )
    }

}
