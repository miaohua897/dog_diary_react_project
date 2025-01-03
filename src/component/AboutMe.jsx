import ShowCase from "./ShowCase";

const AboutMe =({clicker})=>{
 return (
    <div >
          <ShowCase />
          <div className="MyFavorite">
          <table className='MyFavoriteTable'>
            <tbody>
                <tr >
                    <td className="MyFavoriteTableGrid" id="MFTgrid"
                   style={{ borderRight: '2px dashed white' }}
                    >my friends</td>
                    <td className="MyFavoriteTableGrid" id="MFTgrid">poooop</td>
                </tr>
                <tr >
                    <td className="MyFavoriteTableGrid" id="MFTgrid"
                     style={{ borderRight: '2px dashed white' }}
                    >my favorite food</td>
                    <td className="MyFavoriteTableGrid" id="MFTgrid">homemade beef</td>
                </tr>
                <tr >
                    <td id="MFTgrid" 
                     style={{ borderRight: '2px dashed white' }}
                    >my favorite drink</td>
                    <td id="MFTgrid">homemade chicken soup</td>
                </tr>
                </tbody>
            </table>
          
            <button className='myfavoriteperson' onClick ={clicker}>My favorite person</button>
           
          </div>
         
    </div>
  
 )
}

export default AboutMe;