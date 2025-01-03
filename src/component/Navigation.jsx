import {NavLink} from 'react-router-dom';

function Navigation(){

    return (
        <div className='NavBar'>
            {/* <h2>Nav Bar</h2> */}
            <div >
            <nav >
                <ul className ='navigationBar'>
                    <p>
                        <NavLink to ='/'>
                        Home
                        </NavLink>
                    </p>
                    {/* <li>
                        <NavLink to ='/showcase'>
                        ShowCase
                        </NavLink>
                    </li> */}
                    <p>
                        <NavLink to ='/diary'>
                        Diary
                        </NavLink>
                    </p>
                    <p>
                        <NavLink to ='/newdiary'>
                        New Diary
                        </NavLink>
                    </p>
                    {/* <li>
                        <NavLink to ='/newdiaryshow'>
                        My New Diary 
                        </NavLink>
                    </li> */}
                    <p>
                        <NavLink to ='/heathtracking'>
                        Heath Tracking
                        </NavLink>
                    </p>
                </ul>
            </nav>
            </div>
  
        </div>
    )

}
export default Navigation;