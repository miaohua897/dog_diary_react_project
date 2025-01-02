// src/App.jsx

import AboutMe from "./component/AboutMe";
import Diary from "./component/Diary";
import ShowCase from "./component/ShowCase";
import NewDiary from "./component/NewDiary";
import NewDiaryShow from './component/NewDiaryShow';
import { BrowserRouter as Router, Routes, Route,NavLink } from 'react-router-dom';
import Navigation from "./component/Navigation";

function App() {

const handleCick =()=>{
  alert('my Mom, I love my mom ❤️');
}


  return (
    <div>
          <h1> Dog Diary </h1>
          <Router>
          <Navigation />
            <Routes>
              <Route>
                <Route path ='/' element ={<AboutMe clicker={handleCick}/>}/>
                 {/* <Route path = '/showcase' element={   <ShowCase />}/> */}
                 <Route path ='/diary' element = { <Diary />}/>
                 <Route path ='/newdiary' element ={ <NewDiary />}/>
                 <Route path = '/newdiaryshow' element={ <NewDiaryShow />}/>
              </Route>
            </Routes>
          </Router>
    </div>
 )
}

export default App;
