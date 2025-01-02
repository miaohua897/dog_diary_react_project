// src/App.jsx

import AboutMe from "./component/AboutMe";
import Diary from "./component/Diary";
import ShowCase from "./component/ShowCase";
import NewDiary from "./component/NewDiary";

function App() {

const handleCick =()=>{
  alert('my Mom, I love my mom ❤️');
}


  return (
    <div>
          <h1> Dog Diary </h1>
          <ShowCase />
          <AboutMe clicker={handleCick}/>
          <Diary />
          <NewDiary />
    </div>
 )
}

export default App;
