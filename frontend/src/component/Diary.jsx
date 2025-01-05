
import diaryData from "../data/diaryData";

const Diary =()=>{

    return (
        <div>
            <h1>My Diary</h1>
            <ul>
                {
                    diaryData.map((el)=>(
                        <li
                        key ={el.id}
                        >
                       <h3>{el.name}</h3> 
                        <br></br>
                        {el.date}
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