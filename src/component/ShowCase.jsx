import dog from '../images/dog.png';

const ShowCase=()=>{
     return (
        <img 
        style={{height:300,width:300,borderRadius:'50%'}}
        src={dog}
        alt='my picture'
        ></img>
     )
}

export default ShowCase;