import {useState,useEffect} from 'react';
function HealthTracking(){
    const today = new Date();
     const [date,setDate] = useState(today.toString());
     const [event,setEvent] = useState('');
     const [eventType,setEventType] =useState('');
    return (
        <div>
            <h1>Health Tracking</h1>
            <p>{date}</p>
            <p>{event}</p>
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
                style={{width:500}}
                />
                </div>

                <div>
                <label htmlFor='event'>Event</label>
                <input 
                id = 'event'
                type = 'text'
                onChange={e=>setEvent(e.target.value)}
                value = {event}
                style={{height:200,width:500}}
                />
                </div>

                <select 
                name = "eventType"
                onChange={e=>setEventType(e.target.value)}
                value={eventType}
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