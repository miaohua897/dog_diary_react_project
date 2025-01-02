import {createContext,useContext,useState} from 'react';

const NewHealthTrackingContext = createContext();
export const useHealthTracking = ()=>useContext(NewHealthTrackingContext);

export default function NewHealthTracingProvider({children}){
    const [newRecord,setNewRecord] = useState({
        date:'',
        event:'',
        eventType:''
    })
    return (
        <NewHealthTrackingContext.Provider
        value={{
            newRecord,setNewRecord
        }}
        >
            {children}
        </NewHealthTrackingContext.Provider>
    )
}