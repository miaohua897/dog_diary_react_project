import ShowCase from "./ShowCase";

const AboutMe =({clicker})=>{
 return (
    <div >
          <ShowCase />
          <div className="MyFavorite">
          <table className='MyFavoriteTable'>
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
          
            <button className='myfavoriteperson' onClick ={clicker}>My favorite person</button>
           
          </div>
         
    </div>
  
 )
}

export default AboutMe;