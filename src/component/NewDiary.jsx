import { useState } from "react";


function NewDiary (){

    const [value,setValue] = useState('');
    const [info,setInfo] =useState('');

    const handleSubmit=(e)=>{

        e.preventDefault();
        setInfo(value);
        setValue('');
       
    }
    const handleValue=(e)=>{
 const newvalue = e.target.value;
        setValue(newvalue);
    }

   return (
    <form onSubmit={handleSubmit}>
      <h2>New Diary</h2>
      <p>{info}</p>
      <label>
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