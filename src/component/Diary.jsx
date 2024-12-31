
import diaryData from "../data/diaryData";

const Diary =()=>{

    return (
        <div>
            <h1>My Diary</h1>
            <ul>
                {
                    diaryData.map((el,index)=>(
                        <li
                        key ={el.id}
                        >
                        {el.name}
                        <br></br>
                        {el.diary}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Diary;