import { useState } from "react";
import {useNewDiary} from "../context/NewDiaryContext";
import { useNavigate } from "react-router-dom";

function NewDiary (){

    const navigate = useNavigate();
    const { newDiary, setNewDiary}= useNewDiary();
    const [value,setValue] = useState('');
    const today = new Date();
    const [info,setInfo] =useState({
        date:'',
        value:''
    });
    const [date,setDate] = useState(today.toString());

    const handleSubmit=(e)=>{

        e.preventDefault();
        const newobj ={...info};
        newobj.date = date;
        newobj.value =value;
        setInfo(newobj);
        setNewDiary(newobj);
        // console.log(date,value,newobj,info);
        setValue('');
        navigate('/newdiaryshow');
    }
    const handleValue=(e)=>{
 const newvalue = e.target.value;
        setValue(newvalue);
    }
    const handleDate=(e)=>{
        const newdate = e.target.value;
        setDate(newdate);
    }

   return (
    <form onSubmit={handleSubmit}>
      <h2>New Diary</h2>
      <p>{info.date}</p>
      <p>{info.value}</p>
      {/* <p>{"Context"+newDiary.value}</p> */}
      <label>
      <input
        type = 'text'
        style={{height:30,width:600}}
        value={date}
        onChange={handleDate}
        >
        </input>
        <input
        type = 'text'
        style={{height:300,width:600}}
        value={value}
        onChange={handleValue}
        >
        </input>
      </label>
      <button
       type ='submit'
      >
       Submit
      </button>
    </form >
   )
}
export default NewDiary;