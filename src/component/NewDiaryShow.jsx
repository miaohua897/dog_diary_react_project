import {useNewDiary} from "../context/NewDiaryContext";

function NewDiaryShow(){
     const { newDiary, setNewDiary}= useNewDiary();
    return (
        <div>
           <h1>
           My New Diary
            </h1> 
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