import {useHealthTracking} from '../context/HealthTrackingContext';

function DailyRecord(){

    const {newRecord} = useHealthTracking();
    return (
      <>
      <p>{newRecord.eventType}</p>
      </>
    )
}
export default DailyRecord;