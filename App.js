import "./styles.css";
import React,{useState, UseState} from 'react'

export default function App() {
  const[number,setnumber]=useState("9");
  return (
    <div className="App">
      <h3>hover,text,chek</h3>
  

      
      <label >User id: </label>
      <input type="text" id="fname" name="fname" placeholder="Enter User id"/><br/><br/>
      <label >Password: </label>
      <input type="password" id="pwd" name="pwd" maxlength="7" placeholder="Enter Password" className="abc"/><br/><br/>
      <input type="checkbox" defaultChecked/>Rmember Me<br/>
      <input type="submit" value="Submit" class ="btm1"/><br/>
      <h3>inline flex</h3>

      

    <div className="cln">
      <label for="education">Choose your branch</label>
      <select name="edu" id="edu">
        <option value="ECE">ECE</option>
        <option value="IT">IT</option>
        <option value="CSE">CSE</option>
        <option value="ME">ME</option>
      </select>
        <br/><br/>
      <input type="submit" value="Submit"/><br/>
      
      <form action="./app2">
    <input type="submit" value="form2" />
</form>
 

    </div>  
    <div className="com">
      <h3>siblings ~+</h3>
      <h5>Tata Consultancy Services </h5>
      <p>Accenture </p>
      <h5>Cognizant </h5>
    </div>
    <div>
      <h3>{number}</h3>
      <button className="qw" onClick={()=>setnumber(number*2)}>hook</button>
      </div>


      
    </div>

  );
}
