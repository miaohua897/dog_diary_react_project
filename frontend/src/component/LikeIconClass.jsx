
import React from 'react';

class LikeIconClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            likeCount:0
        }
    }

    // componentDidUpdate(prevProps,prevState){

    // }
    render(){
        return (
            <>
            <h1>Like 🐕‍🦺</h1>
            <div>{this.state.likeCount}</div>
            <button 
            style={{width:40,height:20,borderRadius:5}}
            onClick={()=>this.setState((e)=>({likeCount:e.likeCount+1}))}
            >
            ❤️
            </button>
            </>
        )
    }
}
export default LikeIconClass;