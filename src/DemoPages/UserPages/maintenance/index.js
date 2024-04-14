import { faTools } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./maintenance.css"; // Import CSS file
export  function Maintenance () {
  
    return (
        <div className="maintenance-page">
          <div className="maintenance-content">
            <FontAwesomeIcon icon={faTools} className="maintenance-icon" />
            <h1>Under Maintenance</h1>
            <p>We're sorry, but the site is currently undergoing maintenance. Please check back later.</p>
          </div>
        </div>  
      );
  
}
export default Maintenance