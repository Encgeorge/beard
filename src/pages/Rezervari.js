import React ,{useState} from 'react'
import NavigationBar from '../components/Navbar'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


export default function Rezervaris() {
const actualdata=new Date()
const [value,changeValue]=useState(new Date());
console.log(value);
  return (
    <div>
        <NavigationBar/>
        <div className='calendar'>
        <Calendar minDate={actualdata} onChange={changeValue} value={value}/>
        </div>
    </div>
  )
}
