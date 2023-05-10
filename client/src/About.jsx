import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";


import './About.css'
function About() {
    const navigate=useNavigate();
    const [data, setData] = useState([]);
    
    useEffect(() => {
      (async () => {
        try {
          const res = await fetch('https://lookscout-onboarding-with-backend1.onrender.com/products');

          if(res.ok && res.status === 200) {
            const data = await res.json()
            console.log(data)
            setData(data)
          } else {
            console.log(`Something went wrong, please refresh the page.`)
          }
        } catch(e) {
          console.log(`Error fetching data -> ${e.message}`)
        }
      })()
    },[])

  return (
    <>
      <h1 className="title" >Welcome, User</h1>
     <div className="contain">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
            {data?.map((field, i) => 
            <tr key={`field-value-${i}`}>
              <td>{field.name}</td>
              <td>{field.email}</td>
              <td>1234567890 </td>
            </tr>
            )}
        </tbody>
      </table>
      <button className="butn" onClick={()=>navigate("/")}>Update</button></div>
    </>
  );
}

export default About;
