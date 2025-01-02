import { createContext, useContext,useState } from "react";
const  NewDiaryContext = createContext();

export const useNewDiary=()=>useContext(NewDiaryContext);

export default function NewDiaryProvider({children}){
    const [newDiary, setNewDiary] = useState({
        date:'',
        value:''
    });
    return (
        <NewDiaryContext.Provider
        value={{
            newDiary, setNewDiary
        }}
        >
            {children}
        </NewDiaryContext.Provider>
    )
}