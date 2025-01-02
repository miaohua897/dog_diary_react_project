import ShowCase from "./ShowCase";

const AboutMe =({clicker})=>{
 return (
    <div>
          <ShowCase />
            <table>
            <tbody>
                <tr>
                    <td>my friends</td>
                    <td>poooop</td>
                </tr>
                <tr>
                    <td>my favorite food</td>
                    <td>homemade beef</td>
                </tr>
                <tr>
                    <td>my favorite drink</td>
                    <td>homemade chicken soup</td>
                </tr>
                </tbody>
            </table>
          
            <button onClick ={clicker}>My favorite person</button>
           
    </div>
  
 )
}

export default AboutMe;