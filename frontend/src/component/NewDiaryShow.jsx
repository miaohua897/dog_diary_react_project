import {useNewDiary} from "../context/NewDiaryContext";
import imagefordiary from '../images/imagefordiary.png';

function NewDiaryShow(){
     const { newDiary, setNewDiary}= useNewDiary();
    return (
        <div>
           <h1>
           My New Diary
            </h1> 
             <img 
                    style={{height:210,width:200,borderRadius:'50%'}}
                    src={imagefordiary}
                    alt='my picture'
                    ></img>
            <p>
                {newDiary.date}
            </p>
            <p>
                {newDiary.value}
            </p>
        </div>
    )
}
export default  NewDiaryShow;