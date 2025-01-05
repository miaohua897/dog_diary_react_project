import {useState,useEffect} from 'react';
import { useHealthTracking}  from '../context/HealthTrackingContext';
import { useNavigate } from "react-router-dom";
function HealthTracking(){
    const navigate = useNavigate();
     const {newRecord,setNewRecord } = useHealthTracking();
    const today = new Date();
     const [date,setDate] = useState(today.toString());
     const [event,setEvent] = useState('');
     const [eventType,setEventType] =useState('');
     const handleSubmit=(e)=>{
        e.preventDefault();
        const obj ={};
        obj.date=date;
        obj.event =event;
        obj.eventType=eventType;
        setNewRecord(obj);
        const now = new Date();
        setDate(now.toString());
        setEvent('');
        setEventType('');
        if(obj.eventType==='Daily')  navigate('/heathtracking/dailyrecord');
        if(obj.eventType ==='Medical') navigate('/healthtracking/medicalrecord');
        if(obj.eventType === '') return ;
     }
    return (
        <div>
            <h1>Health Tracking</h1>
            {/* <p>{newRecord.date}</p>
            <p>{newRecord.event}</p>
            <p>{newRecord.eventType}</p> */}
            <form 
            onSubmit={handleSubmit}
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