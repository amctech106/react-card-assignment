import { useState } from 'preact/hooks'
import './app.css'
import { h } from 'preact';

const students = [
  {
    id: 1,
    name: "Ali Khan",
    age: 18,
    course: "Web Development",
    city: "Karachi"
  },
  {
    id: 2,
    name: "Sara Ahmed",
    age: 20,
    course: "Graphic Design",
    city: "Lahore"
  },
  {
    id: 3,
    name: "Ahmed Raza",
    age: 19,
    course: "React JS",
    city: "Islamabad"
  },
  {
    id: 4,
    name: "Ayesha Malik",
    age: 21,
    course: "Web Development",
    city: "Karachi"
  }
];

export function App() {
  return (
<div>
      <h1 className='heading'> Student Directory</h1>
    <div className='main'>
{students.map((student)=>(
  <div className='cards'> 
  <div className='names'> {student.name}</div>
  <p> <span className='keys'>Course:</span> {student.course}</p>
  <p> <span className='keys'>Age:</span> {student.age}</p>
  <p> <span className='keys'>City:</span>  {student.city}</p>  
  </div>
  
))}

    </div>
    </div>
  )
}




