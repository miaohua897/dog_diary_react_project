import {NavLink} from 'react-router-dom';

function Navigation(){

    return (
        <div>
            <h2>Nav Bar</h2>
            <nav>
                <ul>
                    <li>
                        <NavLink to ='/'>
                        Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to ='/showcase'>
                        ShowCase
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to ='/diary'>
                        Diary
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to ='/newdiary'>
                        New Diary
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to ='/newdiaryshow'>
                        My New Diary 
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )

}
export default Navigation;