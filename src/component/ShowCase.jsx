import dog from '../images/dog.png';

const ShowCase=()=>{
     return (
        <div>
            <h1>My diary</h1>
        <img 
        style={{height:300,width:300,borderRadius:'50%'}}
        src={dog}
        alt='my picture'
        ></img>
        <p>
            my favorite food is ...

        </p>
        <p>
        I love playing...
        </p>
        </div>
     
     )
}

export default ShowCase;