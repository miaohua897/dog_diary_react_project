import { useHealthTracking } from "../context/HealthTrackingContext";
function MedicalRecord(){
    const {newRecord} = useHealthTracking();
    return (
        <div>
            <p>{newRecord.eventType}</p>
        </div>
    );
}
export default MedicalRecord;