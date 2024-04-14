import { Calendar, momentLocalizer,dayjsLocalizer  } from 'react-big-calendar'
import dayjs from 'dayjs' 
import moment from 'moment' 
// import {useMemo} from "react"
 
const localizer = momentLocalizer(moment)
localizer.segmentOffset=30
const formats = {
    dateFormat: 'MMMM', // Display only the full month name
    monthHeaderFormat: 'MMMM YYYY', // Display the full month name and year in the header
    dayFormat: '', // Remove the day format
  };
  const months = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre'
  ];
export function BilanMensuel (props){
    // const {views, ...otherProps} = useMemo(() => (), [])
    return <div className='bg-white h100 p-3'> 
        <div style={{height:"400px", overflow:"hidden"}}>
            
        </div>
         
    </div>
}
export default BilanMensuel
  
