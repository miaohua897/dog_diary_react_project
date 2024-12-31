// src/App.jsx

import AboutMe from "./component/AboutMe";

function App() {

const handleCick =()=>{
  alert('my Mom, I love my mom ❤️');
}


  return (
    <div>
          <h1> Dog Diary </h1>
          <AboutMe clicker={handleCick}/>
    </div>
 )
}

export default App;
