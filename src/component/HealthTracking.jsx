import {useState,useEffect} from 'react';
function HealthTracking(){
    const today = new Date();
     const [date,setDate] = useState(today.toString());
    return (
        <div>
            <h1>Health Tracking</h1>
            <p>{date}</p>
            <form 
            // onSubmit={onSubmit}
            >
                <div>
                <label htmlFor='date'>Date</label>
                <input 
                id = 'date'
                type = 'text'
                onChange={e=>setDate(e.target.value)}
                value = {date}
                />
                </div>

                <div>
                <label htmlFor='event'>Event</label>
                <input 
                id = 'event'
                type = 'text'
                // onChange
                // value = {date}
                />
                </div>

                <select 
                name = "eventType"
                >
                    <option value =''>
                        Select an event type...
                    </option>
                    <option value = 'Daily'>Daily</option>
                    <option value = 'Medical'>Medical</option>

                </select>
                <button  type ='submit'>Submit</button>

                
            </form>
        </div>
    )
}

export default HealthTracking;